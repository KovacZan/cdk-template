import { Duration } from "aws-cdk-lib";
import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";

export class TestCronConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		const func = new NodejsFunction(this, "TestLambda", {
			entry: path.resolve(__dirname, "lambda.ts"),
			timeout: Duration.seconds(5),
			runtime: Runtime.NODEJS_20_X,
			initialPolicy: [],
		});

		const rule = new Rule(this, "ScheduleRule", {
			schedule: Schedule.rate(Duration.minutes(5)),
		});

		rule.addTarget(new LambdaFunction(func));
	}
}
