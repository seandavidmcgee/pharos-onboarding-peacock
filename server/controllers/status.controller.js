import Status from '../models/status';
import _, { map, forEach } from 'lodash';

/**
 * Get all status info
 * @param req
 * @param res
 * @returns void
 */
export function getStatuses(req, res) {
  Status.findOne({name: 'securityStatus'}).exec((err, securityStatus) => {
    let statuses = securityStatus.statuses;
    if (err) {
      res.status(500).send(err);
    }
    res.json({ statuses });
  });
}

/**
 * Save all status responses
 * @param req
 * @param res
 * @returns void
 */
export function editStatuses(req, res) {
    let responses = req.body.statusResponses;

    _.map(responses, function(response) {
        _.forEach(response, function(value, key) {
            if (value == true) {
                let updateSelections = {
                    $set: {
                        "statuses.$.providedValue": key,
                    }
                };
                Status.findOneAndUpdate({
                    'name': 'securityStatus',
                    'statuses': {
                        '$elemMatch': {
                            'statusName': response.stateName
                        }
                    }
                }, updateSelections, { "new": true, "upsert": true }).exec((err, status) => {
                      if (err) {
                          res.status(500).send(err);
                      } else {
                          res.status(200).end();
                      }
                });
            }
        });
    });
}
