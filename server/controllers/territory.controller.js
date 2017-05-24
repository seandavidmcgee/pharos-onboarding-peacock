import Territory from '../models/territory';

/**
 * Get all territory info
 * @param req
 * @param res
 * @returns void
 */
export function getTerritories(req, res) {
  Territory.findOne({name: 'protectionTerritory'}).exec((err, protectionTerritory) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ protectionTerritory });
  });
}

/**
 * Save all territory responses
 * @param req
 * @param res
 * @returns void
 */
export function editTerritory(req, res) {
    let responses = req.body.territoryResponses;
    let selection = responses.selection;
    let enterprise = responses.enterprise_percent;
    let territory = responses.territory_control;

    let updateSelection = {$set: {"territories.$.providedValue": true, "enterprise_providedValue": enterprise, "territory_providedValue": territory}};

    Territory.findOneAndUpdate({
        'name': 'protectionTerritory',
        'territories': {
            '$elemMatch': {
                'stateName': selection
            }
        }
    }, updateSelection, { "new": true, "upsert": true }).exec((err, territory) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(200).end();
      }
  });
}
