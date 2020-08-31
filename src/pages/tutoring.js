import React from 'react'

import Layout from '../components/Layout/Layout'
import TutoringLanding from '../components/TutoringLanding/TutoringLanding'
import TutoringHow from '../components/TutoringHow/TutoringHow'
import TutoringFeedback from '../components/TutoringFeedback/TutoringFeedback'
import TutoringPayment from '../components/TutoringPayment/TutoringPayment'
import TutoringDetails from '../components/TutoringDetails/TutoringDetails'
import TutoringBook from '../components/TutoringBook/TutoringBook'

const Tutoring = () => {
    return (
        <Layout>
            <TutoringLanding />
            <TutoringHow />
            <TutoringFeedback />
            <TutoringPayment />
            <TutoringDetails />
            <TutoringBook />
        </Layout>
    )
}
export default Tutoring