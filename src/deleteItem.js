"use strict";

const AWS = require("aws-sdk")

const deleteItem = async (event) => {

  const {itemStatus} = JSON.parse(event.body);
  const {id} = event.pathParameters

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.delete({
    TableName: "ItemTable",
    Key: {id}
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      { msg: 'Item deleted'}
    ),
  };
};


module.exports = {
    handler:deleteItem
}


