module.exports.handler = (event: any, context: any): any => {
    console.log(event);
    console.log(context);
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
};