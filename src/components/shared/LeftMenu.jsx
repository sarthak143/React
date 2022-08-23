// import ImportScript from "./ImportScript";
import { Link } from "react-router-dom";
function LeftMenu() {
  //   const Demo = (props) => {
  //     ImportScript("../assets/js/app.min.js");
  //   };
  return (
    <>
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className="leftside-menu">
        {/* <!-- LOGO --> */}
        <Link to="/" className="logo text-center logo-light">
          <span className="logo-lg">
            <img src="/images/logo.png" alt="" height="16" />
          </span>
          <span className="logo-sm">
            <img src="images/logo_sm.png" alt="" height="16" />
          </span>
        </Link>

        {/* <!-- LOGO --> */}
        <Link to="/" className="logo text-center logo-dark">
          <span className="logo-lg">
            <img src="images/logo-dark.png" alt="" height="16" />
          </span>
          <span className="logo-sm">
            <img src="images/logo_sm_dark.png" alt="" height="16" />
          </span>
        </Link>

        <div className="h-100" id="leftside-menu-container" data-simplebar>
          {/* <!--- Sidemenu --> */}
          <ul className="side-nav">
            <li className="side-nav-title side-nav-item">Navigation</li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarDashboards"
                aria-expanded="false"
                aria-controls="sidebarDashboards"
                className="side-nav-link"
              >
                <i className="uil-home-alt"></i>
                <span className="badge bg-success float-end">4</span>
                <span> Dashboards </span>
              </Link>
              <div className="collapse" id="sidebarDashboards">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="dashboard-analytics.html">Analytics</Link>
                  </li>
                  <li>
                    <Link to="/">Ecommerce</Link>
                  </li>
                  <li>
                    <Link to="dashboard-projects.html">Projects</Link>
                  </li>
                  <li>
                    <Link to="dashboard-wallet.html">
                      E-Wallet{" "}
                      <span className="badge rounded bg-danger font-10 float-end">
                        New
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-title side-nav-item">Apps</li>

            <li className="side-nav-item">
              <Link to="/zomato" className="side-nav-link">
                <i className="uil-calender"></i>
                <span> Zomato </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link to="apps-chat.html" className="side-nav-link">
                <i className="uil-comments-alt"></i>
                <span> Chat </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarCrm"
                aria-expanded="false"
                aria-controls="sidebarCrm"
                className="side-nav-link"
              >
                <i className="uil uil-tachometer-fast"></i>
                <span className="badge bg-danger text-white float-end">
                  New
                </span>
                <span> CRM </span>
              </Link>
              <div className="collapse" id="sidebarCrm">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="crm-dashboard.html">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="crm-projects.html">Project</Link>
                  </li>
                  <li>
                    <Link to="crm-orders-list.html">Orders List</Link>
                  </li>
                  <li>
                    <Link to="crm-clients.html">Clients</Link>
                  </li>
                  <li>
                    <Link to="crm-management.html">Management</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarEcommerce"
                aria-expanded="false"
                aria-controls="sidebarEcommerce"
                className="side-nav-link"
              >
                <i className="uil-store"></i>
                <span> Ecommerce </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarEcommerce">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="apps-ecommerce-products.html">Products</Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-products-details.html">
                      Products Details
                    </Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-orders.html">Orders</Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-orders-details.html">
                      Order Details
                    </Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-customers.html">Customers</Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-shopping-cart.html">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-checkout.html">Checkout</Link>
                  </li>
                  <li>
                    <Link to="apps-ecommerce-sellers.html">Sellers</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarEmail"
                aria-expanded="false"
                aria-controls="sidebarEmail"
                className="side-nav-link"
              >
                <i className="uil-envelope"></i>
                <span> Email </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarEmail">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="apps-email-inbox.html">Inbox</Link>
                  </li>
                  <li>
                    <Link to="apps-email-read.html">Read Email</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarProjects"
                aria-expanded="false"
                aria-controls="sidebarProjects"
                className="side-nav-link"
              >
                <i className="uil-briefcase"></i>
                <span> Projects </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarProjects">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="apps-projects-list.html">List</Link>
                  </li>
                  <li>
                    <Link to="apps-projects-details.html">Details</Link>
                  </li>
                  <li>
                    <Link to="apps-projects-gantt.html">
                      Gantt{" "}
                      <span className="badge rounded-pill bg-light text-dark font-10 float-end">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="apps-projects-add.html">Create Project</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link to="apps-social-feed.html" className="side-nav-link">
                <i className="uil-rss"></i>
                <span> Social Feed </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarTasks"
                aria-expanded="false"
                aria-controls="sidebarTasks"
                className="side-nav-link"
              >
                <i className="uil-clipboard-alt"></i>
                <span> Tasks </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarTasks">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="apps-tasks.html">List</Link>
                  </li>
                  <li>
                    <Link to="apps-tasks-details.html">Details</Link>
                  </li>
                  <li>
                    <Link to="apps-kanban.html">Kanban Board</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link to="apps-file-manager.html" className="side-nav-link">
                <i className="uil-folder-plus"></i>
                <span> File Manager </span>
              </Link>
            </li>

            <li className="side-nav-title side-nav-item">Custom</li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarPages"
                aria-expanded="false"
                aria-controls="sidebarPages"
                className="side-nav-link"
              >
                <i className="uil-copy-alt"></i>
                <span> Pages </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarPages">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="pages-profile.html">Profile</Link>
                  </li>
                  <li>
                    <Link to="pages-profile-2.html">Profile 2</Link>
                  </li>
                  <li>
                    <Link to="pages-invoice.html">Invoice</Link>
                  </li>
                  <li>
                    <Link to="pages-faq.html">FAQ</Link>
                  </li>
                  <li>
                    <Link to="pages-pricing.html">Pricing</Link>
                  </li>
                  <li>
                    <Link to="pages-maintenance.html">Maintenance</Link>
                  </li>
                  <li className="side-nav-item">
                    <Link
                      data-bs-toggle="collapse"
                      to="#sidebarPagesAuth"
                      aria-expanded="false"
                      aria-controls="sidebarPagesAuth"
                    >
                      <span> Authentication </span>
                      <span className="menu-arrow"></span>
                    </Link>
                    <div className="collapse" id="sidebarPagesAuth">
                      <ul className="side-nav-third-level">
                        <li>
                          <Link to="pages-login.html">Login</Link>
                        </li>
                        <li>
                          <Link to="pages-login-2.html">Login 2</Link>
                        </li>
                        <li>
                          <Link to="pages-register.html">Register</Link>
                        </li>
                        <li>
                          <Link to="pages-register-2.html">Register 2</Link>
                        </li>
                        <li>
                          <Link to="pages-logout.html">Logout</Link>
                        </li>
                        <li>
                          <Link to="pages-logout-2.html">Logout 2</Link>
                        </li>
                        <li>
                          <Link to="pages-recoverpw.html">
                            Recover Password
                          </Link>
                        </li>
                        <li>
                          <Link to="pages-recoverpw-2.html">
                            Recover Password 2
                          </Link>
                        </li>
                        <li>
                          <Link to="pages-lock-screen.html">Lock Screen</Link>
                        </li>
                        <li>
                          <Link to="pages-lock-screen-2.html">
                            Lock Screen 2
                          </Link>
                        </li>
                        <li>
                          <Link to="pages-confirm-mail.html">Confirm Mail</Link>
                        </li>
                        <li>
                          <Link to="pages-confirm-mail-2.html">
                            Confirm Mail 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="side-nav-item">
                    <Link
                      data-bs-toggle="collapse"
                      to="#sidebarPagesError"
                      aria-expanded="false"
                      aria-controls="sidebarPagesError"
                    >
                      <span> Error </span>
                      <span className="menu-arrow"></span>
                    </Link>
                    <div className="collapse" id="sidebarPagesError">
                      <ul className="side-nav-third-level">
                        <li>
                          <Link to="pages-404.html">Error 404</Link>
                        </li>
                        <li>
                          <Link to="pages-404-alt.html">Error 404-alt</Link>
                        </li>
                        <li>
                          <Link to="pages-500.html">Error 500</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="pages-starter.html">Starter Page</Link>
                  </li>
                  <li>
                    <Link to="pages-preloader.html">With Preloader</Link>
                  </li>
                  <li>
                    <Link to="pages-timeline.html">Timeline</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link to="landing.html" target="_blank" className="side-nav-link">
                <i className="uil-globe"></i>
                <span className="badge bg-secondary text-light float-end">
                  New
                </span>
                <span> Landing </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarLayouts"
                aria-expanded="false"
                aria-controls="sidebarLayouts"
                className="side-nav-link"
              >
                <i className="uil-window"></i>
                <span> Layouts </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarLayouts">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="layouts-horizontal.html">Horizontal</Link>
                  </li>
                  <li>
                    <Link to="layouts-detached.html">Detached</Link>
                  </li>
                  <li>
                    <Link to="layouts-full.html">Full</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-title side-nav-item mt-1">Components</li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarBaseUI"
                aria-expanded="false"
                aria-controls="sidebarBaseUI"
                className="side-nav-link"
              >
                <i className="uil-box"></i>
                <span> Base UI </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarBaseUI">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="ui-accordions.html">Accordions</Link>
                  </li>
                  <li>
                    <Link to="ui-alerts.html">Alerts</Link>
                  </li>
                  <li>
                    <Link to="ui-avatars.html">Avatars</Link>
                  </li>
                  <li>
                    <Link to="ui-badges.html">Badges</Link>
                  </li>
                  <li>
                    <Link to="ui-breadcrumb.html">Breadcrumb</Link>
                  </li>
                  <li>
                    <Link to="ui-buttons.html">Buttons</Link>
                  </li>
                  <li>
                    <Link to="ui-cards.html">Cards</Link>
                  </li>
                  <li>
                    <Link to="ui-carousel.html">Carousel</Link>
                  </li>
                  <li>
                    <Link to="ui-dropdowns.html">Dropdowns</Link>
                  </li>
                  <li>
                    <Link to="ui-embed-video.html">Embed Video</Link>
                  </li>
                  <li>
                    <Link to="ui-grid.html">Grid</Link>
                  </li>
                  <li>
                    <Link to="ui-list-group.html">List Group</Link>
                  </li>
                  <li>
                    <Link to="ui-modals.html">Modals</Link>
                  </li>
                  <li>
                    <Link to="ui-notifications.html">Notifications</Link>
                  </li>
                  <li>
                    <Link to="ui-offcanvas.html">Offcanvas</Link>
                  </li>
                  <li>
                    <Link to="ui-placeholders.html">Placeholders</Link>
                  </li>
                  <li>
                    <Link to="ui-pagination.html">Pagination</Link>
                  </li>
                  <li>
                    <Link to="ui-popovers.html">Popovers</Link>
                  </li>
                  <li>
                    <Link to="ui-progress.html">Progress</Link>
                  </li>
                  <li>
                    <Link to="ui-ribbons.html">Ribbons</Link>
                  </li>
                  <li>
                    <Link to="ui-spinners.html">Spinners</Link>
                  </li>
                  <li>
                    <Link to="ui-tabs.html">Tabs</Link>
                  </li>
                  <li>
                    <Link to="ui-tooltips.html">Tooltips</Link>
                  </li>
                  <li>
                    <Link to="ui-typography.html">Typography</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarExtendedUI"
                aria-expanded="false"
                aria-controls="sidebarExtendedUI"
                className="side-nav-link"
              >
                <i className="uil-package"></i>
                <span> Extended UI </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarExtendedUI">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="extended-dragula.html">Dragula</Link>
                  </li>
                  <li>
                    <Link to="extended-range-slider.html">Range Slider</Link>
                  </li>
                  <li>
                    <Link to="extended-ratings.html">Ratings</Link>
                  </li>
                  <li>
                    <Link to="extended-scrollbar.html">Scrollbar</Link>
                  </li>
                  <li>
                    <Link to="extended-scrollspy.html">Scrollspy</Link>
                  </li>
                  <li>
                    <Link to="extended-treeview.html">Treeview</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link to="widgets.html" className="side-nav-link">
                <i className="uil-layer-group"></i>
                <span> Widgets </span>
              </Link>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarIcons"
                aria-expanded="false"
                aria-controls="sidebarIcons"
                className="side-nav-link"
              >
                <i className="uil-streering"></i>
                <span> Icons </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarIcons">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="icons-dripicons.html">Dripicons</Link>
                  </li>
                  <li>
                    <Link to="icons-mdi.html">Material Design</Link>
                  </li>
                  <li>
                    <Link to="icons-unicons.html">Unicons</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarForms"
                aria-expanded="false"
                aria-controls="sidebarForms"
                className="side-nav-link"
              >
                <i className="uil-document-layout-center"></i>
                <span> Forms </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarForms">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="form-elements.html">Basic Elements</Link>
                  </li>
                  <li>
                    <Link to="form-advanced.html">Form Advanced</Link>
                  </li>
                  <li>
                    <Link to="form-validation.html">Validation</Link>
                  </li>
                  <li>
                    <Link to="form-wizard.html">Wizard</Link>
                  </li>
                  <li>
                    <Link to="form-fileuploads.html">File Uploads</Link>
                  </li>
                  <li>
                    <Link to="form-editors.html">Editors</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarCharts"
                aria-expanded="false"
                aria-controls="sidebarCharts"
                className="side-nav-link"
              >
                <i className="uil-chart"></i>
                <span> Charts </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarCharts">
                <ul className="side-nav-second-level">
                  <li className="side-nav-item">
                    <Link
                      data-bs-toggle="collapse"
                      to="#sidebarApexCharts"
                      aria-expanded="false"
                      aria-controls="sidebarApexCharts"
                    >
                      <span> Apex Charts </span>
                      <span className="menu-arrow"></span>
                    </Link>
                    <div className="collapse" id="sidebarApexCharts">
                      <ul className="side-nav-third-level">
                        <li>
                          <Link to="charts-apex-area.html">Area</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-bar.html">Bar</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-bubble.html">Bubble</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-candlestick.html">
                            Candlestick
                          </Link>
                        </li>
                        <li>
                          <Link to="charts-apex-column.html">Column</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-heatmap.html">Heatmap</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-line.html">Line</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-mixed.html">Mixed</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-pie.html">Pie</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-radar.html">Radar</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-radialbar.html">RadialBar</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-scatter.html">Scatter</Link>
                        </li>
                        <li>
                          <Link to="charts-apex-sparklines.html">
                            Sparklines
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="charts-brite.html">Britecharts</Link>
                  </li>
                  <li>
                    <Link to="charts-chartjs.html">Chartjs</Link>
                  </li>
                  <li>
                    <Link to="charts-sparkline.html">Sparklines</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarTables"
                aria-expanded="false"
                aria-controls="sidebarTables"
                className="side-nav-link"
              >
                <i className="uil-table"></i>
                <span> Tables </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarTables">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="tables-basic.html">Basic Tables</Link>
                  </li>
                  <li>
                    <Link to="tables-datatable.html">Data Tables</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarMaps"
                aria-expanded="false"
                aria-controls="sidebarMaps"
                className="side-nav-link"
              >
                <i className="uil-location-point"></i>
                <span> Maps </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarMaps">
                <ul className="side-nav-second-level">
                  <li>
                    <Link to="maps-google.html">Google Maps</Link>
                  </li>
                  <li>
                    <Link to="maps-vector.html">Vector Maps</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="side-nav-item">
              <Link
                data-bs-toggle="collapse"
                to="#sidebarMultiLevel"
                aria-expanded="false"
                aria-controls="sidebarMultiLevel"
                className="side-nav-link"
              >
                <i className="uil-folder-plus"></i>
                <span> Multi Level </span>
                <span className="menu-arrow"></span>
              </Link>
              <div className="collapse" id="sidebarMultiLevel">
                <ul className="side-nav-second-level">
                  <li className="side-nav-item">
                    <Link
                      data-bs-toggle="collapse"
                      to="#sidebarSecondLevel"
                      aria-expanded="false"
                      aria-controls="sidebarSecondLevel"
                    >
                      <span> Second Level </span>
                      <span className="menu-arrow"></span>
                    </Link>
                    <div className="collapse" id="sidebarSecondLevel">
                      <ul className="side-nav-third-level">
                        <li>
                          <Link to="/;">Item 1</Link>
                        </li>
                        <li>
                          <Link to="/;">Item 2</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="side-nav-item">
                    <Link
                      data-bs-toggle="collapse"
                      to="#sidebarThirdLevel"
                      aria-expanded="false"
                      aria-controls="sidebarThirdLevel"
                    >
                      <span> Third Level </span>
                      <span className="menu-arrow"></span>
                    </Link>
                    <div className="collapse" id="sidebarThirdLevel">
                      <ul className="side-nav-third-level">
                        <li>
                          <Link to="/;">Item 1</Link>
                        </li>
                        <li className="side-nav-item">
                          <Link
                            data-bs-toggle="collapse"
                            to="#sidebarFourthLevel"
                            aria-expanded="false"
                            aria-controls="sidebarFourthLevel"
                          >
                            <span> Item 2 </span>
                            <span className="menu-arrow"></span>
                          </Link>
                          <div className="collapse" id="sidebarFourthLevel">
                            <ul className="side-nav-forth-level">
                              <li>
                                <Link to="/;">Item 2.1</Link>
                              </li>
                              <li>
                                <Link to="/;">Item 2.2</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* <!-- Help Box --> */}
          <div className="help-box text-white text-center">
            <Link to="/" className="float-end close-btn text-white">
              <i className="mdi mdi-close"></i>
            </Link>
            <img
              src="../assets/images/help-icon.svg"
              height="90"
              alt="Helper Icon Image"
            />
            <h5 className="mt-3">Unlimited Access</h5>
            <p className="mb-3">
              Upgrade to plan to get access to unlimited reports
            </p>
            <Link to="/" className="btn btn-secondary btn-sm">
              Upgrade
            </Link>
          </div>
          {/* <!-- end Help Box -->
                    <!-- End Sidebar --> */}

          <div className="clearfix"></div>
        </div>
        {/* <!-- Sidebar -left --> */}

        {/* {Demo()} */}
      </div>
      {/* <!-- Left Sidebar End --> */}
    </>
  );
}

export default LeftMenu;
