import React from 'react';
import Product from './containers/Product';
import Description from './containers/Description';
import Price from './containers/Price';
import Financing from './containers/Financing';
import Shipping from './containers/Shipping';
import Protection from './containers/Protection';
import Items from './containers/Items';
import Features from './containers/Features';
import Evaluation from './containers/Evaluation';
import Services from './components/Services';
import Specs from './containers/Specs';
import Reviews from './containers/Reviews';
import { createStore, Action } from 'redux';
import IGlobalState, { initialState } from './state/globalState';
import { Provider } from 'react-redux';

const reducer = (state: IGlobalState = initialState, action: Action) => {
  return state;
}

const store = createStore(reducer, initialState);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="grid-manager container">
            <div className="row">
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div>
                      <div className="widget widget-pencil-banner" id="widget-ee9b2ba7-56ec-4114-b30e-6d2d06641abe" data-device-class="l" data-library="PencilBannerWidget" data-state="">
                        <div className="pencil-banner myBestBuyBlue" role="group" aria-label="Banner"><span className="headline"><strong>Hasta 15 Meses sin Intereses</strong><sup>1</sup></span><a href="/servicios-financieros/" data-track="pencil_banner_Ver más &amp;gt;" className="call-to-action">Ver más &gt;</a></div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f01" data-version="2.0.0">
                      <div className="shop-breadcrumb">
                        <div className="grid-full breadcrumb" data-reactroot="" data-reactid="1" data-react-checksum="1549399702">
                          <nav aria-label="breadcrumb" data-reactid="2">
                            <div id="heirarchy" data-reactid="3">
                              <ol id="breadcrumb-list" className="list-inline" data-reactid="4">
                                <li data-reactid="5"><a href="https://www.bestbuy.com.mx/c/productos/c3" data-reactid="6">Catálogo de Productos</a><span className="divider" data-reactid="7"></span></li>
                                <li data-reactid="8"><a href="https://www.bestbuy.com.mx/c/wearables/c205" data-reactid="9">Wearables</a><span className="divider" data-reactid="10"></span></li>
                                <li data-reactid="11"><a href="https://www.bestbuy.com.mx/c/smartwatches/c206" data-reactid="12">Smartwatches</a><span className="divider" data-reactid="13"></span></li>
                              </ol>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Product />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f03" data-version="3.0.1">
                      <div className="bbmx-badging"></div>
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f03" data-version="2.1.1">
                      <div className="bbmx-media-gallery-mx">
                        <div className="carousel-outer lv" data-reactroot="">
                          <div>
                            <div className="carousel-inner">
                              <div className="primary-media-wrapper">
                                <div style={{ height: "550px" }} className="active item image-wrapper">
                                  <div className="primary-container"><button className="primary-button" tabIndex={0} aria-label="Open Media Gallery Modal" data-track="enlarge-image:image"><img style={{ transform: "scale(1) translate(0px, 0px)" }} draggable="false" className="primary-image " alt="Front_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro" src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg" /></button></div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="indicators-row">
                                <div className="indicators-column images">
                                  <div className="image-carousel-wrapper">
                                    <ol style={{ transform: "translate(0px)" }} className="carousel-indicate">
                                      <li className="thumbnail-image-wrapper carousel-item visible selected"><a className="carousel-trigger" role="button" tabIndex={0} aria-label="Switch Primary Image"><img alt="Front_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro" draggable="false" src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_sa.jpg" data-track="enlarge-image:image" /></a></li>
                                      <li className="thumbnail-image-wrapper carousel-item visible"><a className="carousel-trigger" role="button" tabIndex={0} aria-label="Switch Primary Image"><img alt="Back_Standard - Apple- Apple Watch Series 4 (GPS) 40mm Caja de aluminio oro/ Correa sport loop rosa arena - Oro" draggable="false" src="https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000225853_ba.jpg" data-track="enlarge-image:image" /></a></li>
                                    </ol>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-open-html" data-widget="widget-open-html" data-library="OpenHtmlWidget" data-device-class="l">
                      <div style={{ color: "#777", fontSize: "11px" }}>Las imágenes del producto son ilustrativas, <a href="/c/terminos-condiciones-compra/s132" target="_blank">ver Términos y Condiciones de Compra</a></div>
                    </div>
                  </div>
                </div>
                <Description />
              </div>
              <div className="col-xs-4">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f05" data-version="3.0.0">
                      <div className="bbmx-social-share">
                        <div className="social-share-container row" data-reactroot="" data-reactid="1" data-react-checksum="-1890723578">
                          <div className="social-share-item-link" data-reactid="2"><span className="c-overlay-wrapper" data-reactid="3"><span className="overlayTrigger" data-reactid="4">
                            <div className="social-share-container-sites-link" aria-expanded="false" aria-controls="social-share-unique-id" aria-owns="social-share-unique-id" data-reactid="5">Compartir</div>
                          </span><span data-reactid="6"></span></span></div>
                          <div className="social-share-item-link" data-reactid="7">
                            <div role="button" tabIndex={0} className="social-share-container-print-link" data-reactid="8">Imprimir</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f06" data-version="1.2.0">
                      <div className="shop-add-to-cart">
                        <div className="appContainer" data-reactroot="" data-reactid="1" data-react-checksum="997942421"><button type="button" className="btn btn-primary btn-lg btn-block btn-leading-ficon " data-reactid="2"><i className="ficon-cart" aria-hidden="true" data-reactid="3"></i>Agregar al Carrito</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Price />
                <Financing />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f20" data-version="4.0.0">
                      <div className="bbmx-coupon-offers">
                        <div className="couponOffersContainer" data-reactroot="" data-reactid="1" data-react-checksum="739646125"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Shipping />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8d0c-b8f6f87c0f42" data-version="5.2.1">
                      <div className="bbmx-availability-pop-up">
                        <div className="apu-container" data-reactroot="" data-reactid="1" data-react-checksum="-1029370"><a className="availability-pop-up-link btn btn-outline btn-block" href="javascript:void(0);" data-reactid="2">Ver disponibilidad</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Protection />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c5843" data-version="2.0.0">
                      <div className="bbmx-comparison-selector-mx-pdp">
                        <div className="comparison-selector-mx-pdp-container" data-reactroot="" data-reactid="1" data-react-checksum="2121174683">
                          <div className="comparison-selector comparison-selector-l" data-reactid="2"><label className="checkbox accessible-toggle" data-reactid="3"><span className="checkbox-brand" data-reactid="4"><input type="checkbox" data-reactid="5" /><i data-reactid="6"></i></span>Comparar artículo</label></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-divider" id="widget-1b6cc51d-20a5-4bb5-929b-71e71b21096a" data-device-class="l" data-library="DividerWidget">
                      <div id="24ac4566-d535-4527-a07a-6859e2d08a77" data-reactroot="">
                        <div className="horizontal-rule"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-accordion" id="widget-accordion-pdp-overview" data-device-class="l" data-library="AccordionWidget" data-state="{&quot;widgetType&quot;:&quot;accordion&quot;,&quot;collapsible&quot;:false,&quot;title&quot;:&quot;Descripción General&quot;,&quot;id&quot;:&quot;widget-accordion-pdp-overview&quot;,&quot;guid&quot;:&quot;76566779-2dcd-4542-b9fc-5d00ft192eb4&quot;,&quot;widgetForgeTypeName&quot;:&quot;@bbmx/widget-accordion&quot;}">
                      <div className="accordion-wrapper"><button className="accordion-toggle type-subhead">Descripción General</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <Items />
                <Evaluation />
                <Services />
              </div>
              <div className="col-xs-8">
                <Features />
              </div>
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-divider" id="widget-a095e2a3-da2b-4e4b-88a4-58fcd84b716e" data-device-class="l" data-library="DividerWidget">
                      <div id="4c06af0a-778f-4b93-b09e-495460e03e76" data-reactroot="">
                        <div className="horizontal-rule"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-accordion" id="widget-accordion-pdp-specifications" data-device-class="l" data-library="AccordionWidget" data-state="{&quot;widgetType&quot;:&quot;accordion&quot;,&quot;collapsible&quot;:true,&quot;title&quot;:&quot;Especificaciones&quot;,&quot;id&quot;:&quot;widget-accordion-pdp-specifications&quot;,&quot;guid&quot;:&quot;86566779-2dcd-4542-b8fc-5d00f4192db3&quot;,&quot;widgetForgeTypeName&quot;:&quot;@bbmx/widget-accordion&quot;}">
                      <div className="accordion-wrapper collapsible"><button className="accordion-toggle type-subhead">Especificaciones</button></div>
                    </div>
                  </div>
                </div>
                <Specs />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-divider" id="widget-1630fac3-4a90-4c5d-bde1-873023e69521" data-device-class="l" data-library="DividerWidget">
                      <div id="b97f5786-6b73-4e4d-a1ba-a3619bee9ecf" data-reactroot="">
                        <div className="horizontal-rule"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-accordion" id="widget-accordion-pdp-reviews" data-device-class="l" data-library="AccordionWidget" data-state="{&quot;widgetType&quot;:&quot;accordion&quot;,&quot;collapsible&quot;:true,&quot;hideByDefault&quot;:true,&quot;id&quot;:&quot;widget-accordion-pdp-reviews&quot;,&quot;title&quot;:&quot;Calificaciones y Reseñas&quot;,&quot;guid&quot;:&quot;86566779-2dcd-4542-b8fc-5d00f4192db4&quot;,&quot;widgetForgeTypeName&quot;:&quot;@bbmx/widget-accordion&quot;}">
                      <div className="accordion-wrapper collapsible"><button className="accordion-toggle type-subhead">Calificaciones y Reseñas</button></div>
                    </div>
                  </div>
                </div>
                <Reviews />
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-divider" id="widget-9a84811c-5d84-456b-abdb-9a4c805bca5b" data-device-class="l" data-library="DividerWidget">
                      <div id="f136ded6-a11c-4f64-a34a-182926b4d44b" data-reactroot="">
                        <div className="horizontal-rule"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-accordion" id="widget-accordion-pdp-third-party-product-info" data-device-class="l" data-library="AccordionWidget" data-state="{&quot;widgetType&quot;:&quot;accordion&quot;,&quot;collapsible&quot;:true,&quot;hideByDefault&quot;:true,&quot;id&quot;:&quot;widget-accordion-pdp-third-party-product-info&quot;,&quot;title&quot;:&quot;Información del Fabricante&quot;,&quot;guid&quot;:&quot;11111111-2dcd-4542-b8fc-5d00f4192db4&quot;,&quot;widgetForgeTypeName&quot;:&quot;@bbmx/widget-accordion&quot;}">
                      <div className="accordion-wrapper collapsible"><button className="accordion-toggle type-subhead">Información del Fabricante</button></div>
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="third-party-product-info">
                    </div>
                  </div>
                </div>
                <div className="widget-wrapper">
                  <div data-reactroot="">
                    <div className="widget widget-divider" id="widget-fe674410-2efe-43a0-b4de-86dd2509eeea" data-device-class="l" data-library="DividerWidget">
                      <div id="498e683a-3758-4fb0-9122-62ed98b8d280" data-reactroot="">
                        <div className="horizontal-rule"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
