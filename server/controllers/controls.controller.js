import Controls from '../models/controls';
import _, { map, forEach } from 'lodash';

/**
 * Get all control categories
 * @param req
 * @param res
 * @returns void
 */
export function getControls(req, res) {
  Controls.findOne({name: 'securityControls'}).exec((err, securityControl) => {
    let controls = securityControl.controls;
    if (err) {
      res.status(500).send(err);
    }
    res.json({ controls });
  });
}

/**
 * Save control responses
 * @param req
 * @param res
 * @returns void
 */
export function editControls(req, res) {
    let responses = req.body.controlResponses;

    _.map(responses, function(response) {
        _.forEach(response, function(value, key) {
            if (value == true) {
                let updateSelections = {
                    $set: {
                        "controls.$.providedValue": value,
                    }
                };
                Controls.findOneAndUpdate({
                    'name': 'securityControls',
                    'controls': {
                        '$elemMatch': {
                            'stateName': response.stateName
                        }
                    }
                }, updateSelections, { "new": true, "upsert": true }).exec((err, controls) => {
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
