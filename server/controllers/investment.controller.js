import Investment from '../models/investment';
import _, { map } from 'lodash';

/**
 * Get all investment info
 * @param req
 * @param res
 * @returns void
 */
export function getInvestments(req, res) {
  Investment.findOne({name: 'securityInvestment'}).exec((err, securityInvestment) => {
    let investments = securityInvestment.investments;
    if (err) {
      res.status(500).send(err);
    }
    res.json({ investments });
  });
}

/**
 * Save all investment responses
 * @param req
 * @param res
 * @returns void
 */
export function editInvestments(req, res) {
    let responses = req.body.investmentResponses;

    _.map(responses, function(response) {
        let updateSelections = {
            $set: {
                "investments.$.providedValue": response.providedValue,
            }
        };
        Investment.findOneAndUpdate({
            'name': 'securityInvestment',
            'investments': {
                '$elemMatch': {
                    'stateName': response.stateName
                }
            }
        }, updateSelections, { "new": true, "upsert": true }).exec((err, investment) => {
              if (err) {
                  res.status(500).send(err);
              } else {
                  res.status(200).end();
              }
        });
    });
}
