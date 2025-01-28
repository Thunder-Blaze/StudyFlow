import Page_Layout from './Page_Layout'
import './FAQs.css'
import Questions_Answers from '../components/FAQs/Questions_Answers'

const FAQs = () => {
    return (
        <Page_Layout>
            <div className="p-4 pt-0">
                <h1 className="Heading">FAQs</h1>
                <Questions_Answers
                    ques="How do I create an account or log in for the first time?"
                    ans="fdsjfsdjmf, sdjfsdn,f sdfnsfsdf snfsdmfnsdsf sdfnm,sd asjdajsk ajsfh aksjf jaskfjh aksfajsfh ajasfj hk"
                />

                <Questions_Answers
                    ques="What should I do if I forget my password?"
                    ans="fdsjfsdjmf, sdjfsdn,f sdfnsfsdf snfsdmfnsdsf sdfnm,sd"
                />

                <Questions_Answers
                    ques="How can I update my personal information (e.g., email, phone number)?"
                    ans="fdsjfsdjmf, sdjfsdn,f sdfnsfsdf snfsdmfnsdsf sdfnm,sd"
                />

                <Questions_Answers
                    ques="How do I register for courses or drop a class?"
                    ans="fdsjfsdjmf, sdjfsdn,f sdfnsfsdf snfsdmfnsdsf sdfnm,sd"
                />
            </div>
        </Page_Layout>
    )
}

export default FAQs
