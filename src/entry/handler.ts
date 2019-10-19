import { ApiRequest } from '../models/lambda';


module.exports.handler = (event: ApiRequest, context: any): any => {
    try {
        console.log(event.httpMethod);

        return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
    }
    catch(err) {
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Go Serverless v1.0! Your function executed successfully!',
                    input: event,
                },
                null,
                2
            ),
        };
    }
};