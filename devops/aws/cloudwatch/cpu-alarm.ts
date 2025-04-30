import { CloudWatch, PutMetricAlarmCommandInput } from '@aws-sdk/client-cloudwatch';
import { SNSClient, CreateTopicCommand } from '@aws-sdk/client-sns';
import dotenv from 'dotenv';


dotenv.config();


const REGION = process.env.REGION!;
const ACCOUNT_ID = process.env.ACCOUNT_ID!;
const TOPIC = process.env.TOPIC!;


const cloudwatch = new CloudWatch({ region: REGION });

const snsClient = new SNSClient({ region: REGION });



async function createAlarm(
    metricName: string,
    threshold: number,
    period: number,
    evaluationPeriods: number,
    alarmName: string
): Promise<void> {
    try {

        const topicResponse = await snsClient.send(new CreateTopicCommand({ Name: TOPIC }));
        const topicArn = topicResponse.TopicArn!;
        console.log('✅ SNS topic created or found:', topicArn);

        const alarmParams: PutMetricAlarmCommandInput = {
            AlarmName: alarmName,
            AlarmDescription: `Alarm for ${metricName} reaching threshold`,
            MetricName: metricName,
            Namespace: 'AWS/EC2',
            Statistic: 'Average',
            Period: period,
            EvaluationPeriods: evaluationPeriods,
            Threshold: threshold,
            ComparisonOperator: 'GreaterThanThreshold',
            TreatMissingData: 'ignore',
            AlarmActions: [topicArn],
            InsufficientDataActions: [topicArn],
        };


        await cloudwatch.putMetricAlarm(alarmParams);
        console.log('CloudWatch alarm created:', alarmName);
    } catch (error) {
        console.error('Error creating alarm:', error);
    }
}


// const metricName = 'CPUUtilization';
// const threshold = 80;
// const period = 60;
// const evaluationPeriods = 2;
// const alarmName = 'HighCPUAlarm';


// createAlarm(metricName, threshold, period, evaluationPeriods, alarmName);
