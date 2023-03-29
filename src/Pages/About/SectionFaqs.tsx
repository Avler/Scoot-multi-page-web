import {useState} from "react"


export default function SectionFaqs() {
    const [faqQuestion , setFaqQuestion ] = useState("")

    const openFaq = (index:string) => {
        if (faqQuestion === "") {
            setFaqQuestion( index)
        } else if (faqQuestion != index) {
            setFaqQuestion(index)
        } else {
            setFaqQuestion("")
        }
    }
        
    

    return(
        <div className="cont-section-faq">
            <h1 className="section-faq-title">FAQs</h1>
            <div className="section-faq-elm">
                <h2 className="section-faq-elm-title">How it works</h2>
                <div className="section-faq-box">
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            How do I download the app?
                            {faqQuestion === "question1"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question1")} /> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question1")}/>}  
                            </h2>
                        {faqQuestion === "question1" ? <p className="section-faq-elm-question-elment-text">To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.</p>: null} 
                        </div>
                    </div>
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            Can I find a nearby Scoots?
                            {faqQuestion === "question2"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question2")}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question2")}/>}  
                            </h2>
                        {faqQuestion === "question2"?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null} 
                        </div>
                    </div>
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            Do I need a license to ride?
                            {faqQuestion === "question3"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question3")}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question3")}/>}  
                            </h2>
                            {faqQuestion === "question3"?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null}
                    </div>
                </div>
            </div>
                </div>
                
            
            <div className="section-faq-elm">
                <h2 className="section-faq-elm-title">Safe driving  </h2>
                <div className="section-faq-box">
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            Should I wear a helmet?
                            {faqQuestion === "question4"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question4")} /> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question4")}/>}  
                            </h2>
                        {faqQuestion === "question4" ? <p className="section-faq-elm-question-elment-text">Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.</p>: null} 
                        </div>
                    </div>
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            How about the rules & regulations?
                            {faqQuestion === "question5"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question5")}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question5")}/>}  
                            </h2>
                        {faqQuestion === "question5"?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null} 
                        </div>
                    </div>
                    <div className="section-faq-elm-question">
                        <div className="section-faq-elm-question-elment">       
                            <h2 className="section-faq-elm-question-elment-title">
                            What if I damage my Scoot?
                            {faqQuestion === "question6"? <img src="src\assets\images\About\faq-arrow-open.png" onClick={() => openFaq("question6")}/> : <img src="src\assets\images\About\faq-arrow-close.png" onClick={() => openFaq("question6")}/>}  
                            </h2>
                            {faqQuestion === "question6"?<p className="section-faq-elm-question-elment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate porro tempore aliquam quaerat deleniti quia recusandae, accusantium, laboriosam voluptate sit quos dignissimos incidunt fugit amet, voluptatem animi a possimus aperiam!</p>: null}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )       
}