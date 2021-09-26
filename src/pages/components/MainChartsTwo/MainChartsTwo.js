import React from "react";

import { Row, Col } from "reactstrap";

import Widget from "../../../components/Widget/Widget";
import ApexChart from "react-apexcharts";

import {  Table } from "reactstrap";
import Rickshaw from "./rickshaw/Rickshaw";



import s from "./Charts.module.scss";
import { chartData, liveChart,liveChart2, liveChartInterval } from "./mock";
import Sparklines from "../../../components/Sparklines/Sparklines";

import ReactEchartsCore from "echarts-for-react/lib/core";

import echarts from "echarts/lib/echarts";

import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/themeRiver";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import exportData from "highcharts/modules/export-data";

import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';


exporting(Highcharts);
exportData(Highcharts);

class MainChartsTwo extends React.Component {
  state = {
    cd: chartData,
    ld: liveChart,
    ld2: liveChart2,
    initEchartsOptions: {
      renderer: "canvas",
    },
    sparklineData: {
      series: [{ data: [1, 7, 3, 5, 7, 8] }],
      options1: {
        colors: ["#db2a34"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
      options2: {
        colors: ["#2477ff"],
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
    },
  };

  componentWillUnmount() {
    clearInterval(liveChartInterval);
  }

  render() {
    const { cd, ld,ld2, initEchartsOptions, sparklineData } = this.state;
    return (
      <div className={s.root}>
        <h1 className="page-title">
          <span className="fw-semi-bold">Dashboard</span>
        </h1>
        <div>
          <Row>
          <Col lg={12} xs={12}>
            <Widget
              title={
                <h6>
                  {" "}
                   <span className="fw-semi-bold">Stats</span>
                </h6>
              }
              close
            >
              <div className="widget-body">
                <h3>Fuel energy cost vs Solar Energy cost</h3>
                <p className="fs-mini text-muted mb mt-sm">
                  Estimation
                </p>
              </div>


              <div
                className="widget-body mt-xlg chart-overflow-bottom"
                style={{ height: "100px" }}
              >
                <Rickshaw height={100} />
              </div>
            </Widget>
          </Col>
          </Row>
          <Row>
          <Col lg={12} xs={12}>
                  <Widget
                    title={
                      <h5>
                        
                        <span className="fw-semi-bold">Solar Energy</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <HighchartsReact options={ld} />
                  </Widget>
                </Col>
          </Row>
          <Row>
          <Col lg={12} xs={12}>
                  <Widget
                    title={
                      <h5>
                        
                        <span className="fw-semi-bold">CH4 Emissions</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <HighchartsReact options={ld2} />
                  </Widget>
                </Col>
          </Row>
          <Row>
          <Col lg={12} xs={12}>
                  <Widget
                    title={
                      <h5>
                        
                        <span className="fw-semi-bold">N2O Emissions</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <HighchartsReact options={liveChart} />
                  </Widget>
                </Col>
          </Row>

          <Row>
          <Col lg={4} xs={12}>
              <Widget
                title={
                  <h5>
                    <span className="fw-semi-bold">Electricity consumption</span>
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col>
            <Col lg={4} xs={12}>
              <Widget
                title={
                  <h5>
                    <span className="fw-semi-bold">Oil consumption</span>
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col>
            <Col lg={4} xs={12}>
              <Widget
                title={
                  <h5>
                    <span className="fw-semi-bold">Water consumption</span>
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col>
          </Row>
          <Row>
          <form onSubmit={this.doLogin}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                              <Row>
                                <Col>
                                <Input id="email" className="input-transparent pl-3"  type="file" required name="email" placeholder="File"/>
  
                                </Col>
                                <Col>
                                <Button type="submit" color="success" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>
                                      Submit
                                    </Button>
                                </Col>
                              </Row>
                                    
                            </FormGroup>
                                

          </form>
          </Row>
          <Row>
          <Col lg={12 } xs={12}>
              <Widget
                title={
                  <h5>
                    <span className="fw-semi-bold">Historical CO2 Data</span>
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col>
          </Row>
         
        </div>
      </div>
    );
  }
}

export default MainChartsTwo;
