/*
 * --------------------------------------------------------------------------- *
 * File: index.js                                                              *
 * Project: educative-apigateway-50-caching                                    *
 * Created Date: 15 Oct 2022                                                   *
 * Author: Vikas K Solegaonkar (vikas@crystalcloudsolutions.com)               *
 * Copyright (c) 2022 Vikas K Solegaonkar                                      *
 * Crystal Cloud Solutions (https://crystalcloudsolutions.com)                 *
 *                                                                             *
 * Last Modified: Sat Oct 15 2022                                              *
 * Modified By: Vikas K Solegaonkar                                            *
 *                                                                             *
 * HISTORY:                                                                    *
 * --------------------------------------------------------------------------- *
 * Date         By     Comments                                                *
 * --------------------------------------------------------------------------- *
 */



/**
 * This code is deployed as the Lambda function in AWS.
 * It just returns the simple string Hello World.
 */

exports.handler = async (event, context) => {
  return new Date();
};
