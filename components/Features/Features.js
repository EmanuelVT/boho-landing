export default function Features(){
    return(
        <section className="Features" id="features">
            <div className="container">

                <h3>Features</h3>

                <div className="row">
                    <div className="col-md-6">
                        <div className="Features__text">
                            <h1>Chic Design</h1>
                            <p>Elegant and clean design for</p>
                            <p>your products and collections.</p>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                      
                        <img src="/images/boho-style.png"></img>
                      
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                            <img src="/images/article-page.png"></img>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="Features__text">
                                <h1>Blogs Layouts</h1>
                                <p>One or two column layouts for your blog articles.</p>
                            </div>
                            
                        </div>
                    

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="Features__text">
                            <h1>Collection Layout</h1>
                            <p>Clean and simple grid layout for all your collections.</p>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <img src="/images/collection.png"></img>
                    </div>

                </div>



            </div>
        </section>
    )
}