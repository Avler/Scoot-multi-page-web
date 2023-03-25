import {useState} from "react"

export default function SectionFaqs() {
    const [faqQuestion , setFaqQuestion ] = useState(false)

    const openFaq = () => {
        setFaqQuestion(x => !x)
    }

    return(
        <div className="cont-section-faq">
            <h1 className="section-faq-title">FAQs</h1>
            <div className="section-faq-elm">
                <h2 className="section-faq-elm-title">How it works</h2>
                <div className="section-faq-elm-question">
                    <div className="section-faq-elm-question-elment">       
                        <h2 className="section-faq-elm-question-elment-title">
                        How do I download the app?
                          {faqQuestion? <img src="src\assets\images\About\faq-arrow-open.png" onClick={openFaq}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={openFaq}/>}  
                        </h2>
                       {faqQuestion ? <p className="section-faq-elm-question-elment-text">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>: null} 
                    </div>
                </div>
                <div className="section-faq-elm-question">
                    <div className="section-faq-elm-question-elment">       
                        <h2 className="section-faq-elm-question-elment-title">
                        Can I find a nearby Scoots?
                        {faqQuestion? <img src="src\assets\images\About\faq-arrow-open.png" onClick={openFaq}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={openFaq}/>}  
                        </h2>
                       {faqQuestion ?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null} 
                    </div>
                </div>
                <div className="section-faq-elm-question">
                    <div className="section-faq-elm-question-elment">       
                        <h2 className="section-faq-elm-question-elment-title">
                        Do I need a license to ride?
                        {faqQuestion? <img src="src\assets\images\About\faq-arrow-open.png" onClick={openFaq}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={openFaq}/>}  
                        </h2>
                        {faqQuestion ?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null}
                    </div>
                </div>
            </div>
            
        </div>
    )       
}