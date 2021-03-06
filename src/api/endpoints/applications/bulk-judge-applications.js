import Pupper from 'api/pupper';

const bulkJudgeApplications = (token, decision, applicationIds = []) => {
    return Pupper.put('/application/judge/all',
        Pupper.sign({
            body: {
                application_ids: applicationIds,
                decision,
            },
        }, token));
};

export default bulkJudgeApplications;
