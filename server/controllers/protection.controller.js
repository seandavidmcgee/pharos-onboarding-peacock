import Protection from '../models/protection';

/**
 * Get all protection info
 * @param req
 * @param res
 * @returns void
 */
export function getProtections(req, res) {
  Protection.findOne({name: 'levelsOfProtection'}).exec((err, levelsOfProtection) => {
    let protections = levelsOfProtection.protections;
    if (err) {
      res.status(500).send(err);
    }
    res.json({ protections });
  });
}

/**
 * Save all protection responses
 * @param req
 * @param res
 * @returns void
 */
export function editProtections(req, res) {
    let responses = req.body.protectionResponses;

    responses.map(function(response, i) {
        let updateSelections = {
            $set: {
                "protections.$.extCyberProvided": response.extCyberProvided,
                "protections.$.extPhysicalProvided": response.extPhysicalProvided,
                "protections.$.extSocialProvided": response.extSocialProvided,
                "protections.$.extThirdProvided": response.extThirdProvided,
                "protections.$.intCyberProvided": response.intCyberProvided,
                "protections.$.intPhysicalProvided": response.intPhysicalProvided,
                "protections.$.intSocialProvided": response.intSocialProvided,
                "protections.$.intPrivProvided": response.intPrivProvided
            }
        };
        Protection.findOneAndUpdate({
            'name': 'levelsOfProtection',
            'protections': {
                '$elemMatch': {
                    'protection': response.protection
                }
            }
        }, updateSelections, { "new": true, "upsert": true }).exec((err, protection) => {
              if (err) {
                  res.status(500).send(err);
              } else {
                  res.status(200).end();
              }
        });
    });
}
