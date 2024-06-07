import react from "react";
import "../../assets/style/about.scss"
import "../../assets/style/material-kit.css"
import { imageList } from "../../contains/img";
import arrowDark from "../../assets/img/down-arrow-dark.svg" 


const Child = ({ ...props }) => {
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="mb-4 w-100 w-md-50 w-lg-25">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="https://demos.creative-tim.com/material-kit-pro/index">Page Sections</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Features</li>
                </ol>
              </nav>
              <h3>Features</h3>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row justify-space-between py-2">
                  <div className="col-lg-3 me-auto">
                    <p className="lead text-dark pt-1 mb-0">Features 1</p>
                  </div>
                  <div className="col-lg-3">
                    <div className="nav-wrapper position-relative end-0">
                      <ul className="nav nav-pills nav-fill flex-row p-1" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#preview-features-1" role="tab" aria-selected="true">
                            <i className="fas fa-desktop text-sm me-2"></i> Preview
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#code-features-1" role="tab" aria-selected="false">
                            <i className="fas fa-code text-sm me-2"></i> Code
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content tab-space">
                <div className="tab-pane active" id="preview-features-1">
                  <iframe className="w-100 height-600" srcdoc='<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
            <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
            <!-- Material Icons -->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
            <link id="pagestyle" href="https://demos.creative-tim.com/material-kit/assets/css/material-kit.min.css?v=3.0.4" rel="stylesheet" />
            <!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- -->
    <section className="py-9">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h3>Read More About Us</h3>
            <p className="pe-5">Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            <a href="javascript:;" className="text-primary icon-move-right">More about us
              <i className="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div className="p-3 info-horizontal">
              <div className="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i className="fas fa-ship opacity-10"></i>
              </div>
              <div className="description ps-3">
                <p className="mb-0">It becomes harder for us to give others a hand. <br> We get our heart broken by people we love.</p>
              </div>
            </div>
    
            <div className="p-3 info-horizontal">
              <div className="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i className="fas fa-handshake opacity-10"></i>
              </div>
              <div className="description ps-3">
                <p className="mb-0">As we live, our hearts turn colder. <br>Cause pain is what we go through as we become older.</p>
              </div>
            </div>
            <div className="p-3 info-horizontal">
              <div className="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i className="fas fa-hourglass opacity-10"></i>
              </div>
              <div className="description ps-3">
                <p className="mb-0">When we lose family over time. <br> What else could rust the heart more over time? Blackgold.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- -->
    
            '></iframe>
                </div>
                <div className="tab-pane" id="code-features-1">
                  <div className="position-relative p-4 pb-2">
                    <a className="btn btn-sm bg-gradient-dark position-absolute end-4 mt-3" onclick="copyCode(this);" href="javascript:;"><i className="fas fa-copy text-sm me-1"></i> Copy</a>
                        <figure className="highlight"><pre><code className="language-html" data-lang="html"><span className="c">&lt;!-- -------- START Features w/ icons and text on left &amp; gradient title and text on right -------- --&gt;</span>
        <span className="nt">&lt;section</span> <span className="na">className=</span><span className="s">"py-9"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"container"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"row"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-lg-6 my-auto"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;h3&gt;</span>Read More About Us<span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">"pe-5"</span><span className="nt">&gt;</span>Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"javascript:;"</span> <span className="na">className=</span><span className="s">"text-primary icon-move-right"</span><span className="nt">&gt;</span>More about us
                <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fas fa-arrow-right text-sm ms-1"</span><span className="nt">&gt;&lt;/i&gt;</span>
                <span className="nt">&lt;/a&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"p-3 info-horizontal"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"icon icon-shape  bg-gradient-primary shadow-primary text-center"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fas fa-ship opacity-10"</span><span className="nt">&gt;&lt;/i&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"description ps-3"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>It becomes harder for us to give others a hand. <span className="nt">&lt;br&gt;</span> We get our heart broken by people we love.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
        
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"p-3 info-horizontal"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"icon icon-shape  bg-gradient-primary shadow-primary text-center"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fas fa-handshake opacity-10"</span><span className="nt">&gt;&lt;/i&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"description ps-3"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>As we live, our hearts turn colder. <span className="nt">&lt;br&gt;</span>Cause pain is what we go through as we become older.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"p-3 info-horizontal"</span><span className="nt">&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"icon icon-shape  bg-gradient-primary shadow-primary text-center"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fas fa-hourglass opacity-10"</span><span className="nt">&gt;&lt;/i&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"description ps-3"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;p</span> <span className="na">className=</span><span className="s">"mb-0"</span><span className="nt">&gt;</span>When we lose family over time. <span className="nt">&lt;br&gt;</span> What else could rust the heart more over time? Blackgold.<span className="nt">&lt;/p&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
            <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/section&gt;</span>
        <span className="c">&lt;!-- -------- END Features w/ icons and text on left &amp; gradient title and text on right -------- --&gt;</span></code></pre>
                        </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 2</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-2.jpg" alt="features-2" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 3</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-3.jpg" alt="features-3" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 4</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-4.jpg" alt="features-4" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 5</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-5.jpg" alt="features-5" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 6</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-6.jpg" alt="features-6" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 7</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-7.jpg" alt="features-7" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 8</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-8.jpg" alt="features-8" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 9</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-9.jpg" alt="features-9" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 10</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-10.jpg" alt="features-10" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 11</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-11.jpg" alt="features-11" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 12</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-12.jpg" alt="features-12" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 13</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-13.jpg" alt="features-13" />
              </div>
            </div>
            <div className="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
              <div className="container border-bottom">
                <div className="row py-3">
                  <div className="col-lg-4 text-start">
                    <p className="lead text-dark pt-1 mb-0">Feature 14</p>
                  </div>
                  <div className="col-lg-4 mt-1 text-center">
                    <span className="badge bg-light text-dark"><i className="fas fa-lock me-1" aria-hidden="true"></i> Screenshot</span>
                  </div>
                  <div className="col-lg-4 text-end my-auto">
                    <a href="https://demos.creative-tim.com/material-kit-pro/index#pricing-soft-ui" className="text-primary icon-move-right">Get the Code
                      <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-100" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/assets/img/sections/features/features-14.jpg" alt="features-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const AboutPage = (props) => {
    return <>
    <div className="features-sections">
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
        <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit/presentation" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank"> Material Kit 2</a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-5">
                <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPages5" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                Pages
                <img src={props?.images?.down_arrow_dark} alt="down-arrow" className="arrow ms-auto ms-md-2" />
                </a>
                <div className="dropdown-menu ms-n3 dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages5">
                <div className="d-none d-lg-block">
                    <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                    Landing Pages
                    </h6>
                    <a href="../../pages/about-us.html" className="dropdown-item border-radius-md">
                    <span>About Us</span>
                    </a>
                    <a href="../../pages/contact-us.html" className="dropdown-item border-radius-md">
                    <span>Contact Us</span>
                    </a>
                    <a href="../../pages/author.html" className="dropdown-item border-radius-md">
                    <span>Author</span>
                    </a>
                    <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                    Account
                    </h6>
                    <a href="../../pages/sign-in.html" className="dropdown-item border-radius-md">
                    <span>Sign In</span>
                    </a>
                </div>
                <div className="d-lg-none">
                    <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                    Landing Pages
                    </h6>
                    <a href="../../pages/about-us.html" className="dropdown-item border-radius-md">
                    <span>About Us</span>
                    </a>
                    <a href="../../pages/contact-us.html" className="dropdown-item border-radius-md">
                    <span>Contact Us</span>
                    </a>
                    <a href="../../pages/author.html" className="dropdown-item border-radius-md">
                    <span>Author</span>
                    </a>
                    <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1 mt-3">
                    Account
                    </h6>
                    <a href="../../pages/sign-in.html" className="dropdown-item border-radius-md">
                    <span>Sign In</span>
                    </a>
                </div>
                </div>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="material-icons opacity-6 me-2 text-md">view_day</i>
              Sections
              <img src={props?.images?.down_arrow_dark} alt="down-arrow" className="arrow ms-auto ms-md-2" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuBlocks">
              <div className="d-none d-lg-block">
                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a className="dropdown-item py-2 ps-3 border-radius-md" href="../../presentation.html">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                        <span className="text-sm">See all sections</span>
                      </div>
                       <img src={props?.images?.down_arrow} alt="down-arrow" className="arrow" />
                    </div>
                  </a>
                  <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/page-sections/hero-sections.html">
                      Page Headers
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/page-sections/features.html">
                      Features
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a className="dropdown-item py-2 ps-3 border-radius-md" href="../../presentation.html">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Navigation</h6>
                        <span className="text-sm">See all navigations</span>
                      </div>
                       <img src={props?.images?.down_arrow} alt="down-arrow" className="arrow" />
                    </div>
                  </a>
                  <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/navbars.html">
                      Navbars
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/nav-tabs.html">
                      Nav Tabs
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/pagination.html">
                      Pagination
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a className="dropdown-item py-2 ps-3 border-radius-md" href="../../presentation.html">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Input Areas</h6>
                        <span className="text-sm">See all input areas</span>
                      </div>
                       <img src={props?.images?.down_arrow} alt="down-arrow" className="arrow" />
                    </div>
                  </a>
                  <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/input-areas/inputs.html">
                      Inputs
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/input-areas/forms.html">
                      Forms
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a className="dropdown-item py-2 ps-3 border-radius-md" href="../../presentation.html">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Attention Catchers</h6>
                        <span className="text-sm">See all examples</span>
                      </div>
                       <img src={props?.images?.down_arrow} alt="down-arrow" className="arrow" />
                    </div>
                  </a>
                  <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/alerts.html">
                      Alerts
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/modals.html">
                      Modals
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/tooltips-popovers.html">
                      Tooltips & Popovers
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                  <a className="dropdown-item py-2 ps-3 border-radius-md" href="../../presentation.html">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Elements</h6>
                        <span className="text-sm">See all elements</span>
                      </div>
                       <img src={props?.images?.down_arrow} alt="down-arrow" className="arrow" />
                    </div>
                  </a>
                  <div className="dropdown-menu mt-0 py-3 px-2 mt-3">
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/avatars.html">
                      Avatars
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/badges.html">
                      Badges
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/breadcrumbs.html">
                      Breadcrumbs
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/buttons.html">
                      Buttons
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/dropdowns.html">
                      Dropdowns
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/progress-bars.html">
                      Progress Bars
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/toggles.html">
                      Toggles
                    </a>
                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/typography.html">
                      Typography
                    </a>
                  </div>
                </li>
              </div>
              <div className="row d-lg-none">
                <div className="col-md-12">
                  <div className="d-flex mb-2">
                    <div className="icon h-10 me-3 d-flex mt-1">
                      <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/page-sections/hero-sections.html">
                    Page Headers
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/page-sections/features.html">
                    Features
                  </a>
                  <div className="d-flex mb-2 mt-3">
                    <div className="icon h-10 me-3 d-flex mt-1">
                      <i className="ni ni-laptop text-gradient text-primary"></i>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Navigation</h6>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/navbars.html">
                    Navbars
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/nav-tabs.html">
                    Nav Tabs
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/navigation/pagination.html">
                    Pagination
                  </a>
                  <div className="d-flex mb-2 mt-3">
                    <div className="icon h-10 me-3 d-flex mt-1">
                      <i className="ni ni-badge text-gradient text-primary"></i>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Input Areas</h6>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/input-areas/inputs.html">
                    Inputs
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/input-areas/forms.html">
                    Forms
                  </a>
                  <div className="d-flex mb-2 mt-3">
                    <div className="icon h-10 me-3 d-flex mt-1">
                      <i className="ni ni-notification-70 text-gradient text-primary"></i>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Attention Catchers</h6>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/alerts.html">
                    Alerts
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/modals.html">
                    Modals
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/attention-catchers/tooltips-popovers.html">
                    Tooltips & Popovers
                  </a>
                  <div className="d-flex mb-2 mt-3">
                    <div className="icon h-10 me-3 d-flex mt-1">
                      <i className="ni ni-app text-gradient text-primary"></i>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Elements</h6>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/avatars.html">
                    Avatars
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/badges.html">
                    Badges
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/breadcrumbs.html">
                    Breadcrumbs
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/buttons.html">
                    Buttons
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/dropdowns.html">
                    Dropdowns
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/progress-bars.html">
                    Progress Bars
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/toggles.html">
                    Toggles
                  </a>
                  <a className="dropdown-item ps-3 border-radius-md mb-1" href="../../sections/elements/typography.html">
                    Typography
                  </a>
                </div>
              </div>
            </ul>
          </li>
            </ul>
        </div>
        </div>
    </nav>
        <div className="container mt-5">
            <Child props={props} ></Child>
        </div>
    </div>
    </>
}

export default AboutPage