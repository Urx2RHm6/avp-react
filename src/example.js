import React, { Component } from "react";
import { Form, Grid, Table } from "semantic-ui-react";

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Grid.Row>
                <Form.Field>
                  <label />
                  <input placeholder="Company" />
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Form.Field>
                  <label />
                  <input placeholder="Well" />
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Form.Field>
                  <label />
                  <input placeholder="State" />
                </Form.Field>
                <Form.Field>
                  <label />
                  <input placeholder="Country" />
                </Form.Field>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell> </Table.HeaderCell>
                    <Table.HeaderCell colSpan="2">Gauges</Table.HeaderCell>
                    <Table.HeaderCell>Tank #</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>T</Table.Cell>
                    <Table.Cell singleLine>
                      <Form.Field>
                        <input placeholder="" />
                      </Form.Field>
                      <Form.Field>
                        <input placeholder="" />
                      </Form.Field>
                    </Table.Cell>
                    <Table.Cell>
                      <Form.Field>
                        <input placeholder="" />
                      </Form.Field>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={3}>
              <Grid.Row>
                <Form.Field>
                  <input placeholder="Date" />
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Form.Field>
                  <input placeholder="Disposal" />
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Form.Field>
                  <label />
                  <input placeholder="Truck" />
                </Form.Field>
                <Form.Field>
                  <label />
                  <input placeholder="Hours" />
                </Form.Field>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="2" textAlign="center">
                    Description of Work Performed
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Rate</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Amount</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell textAlign="center">Trucking</Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell textAlign="center">Disposal Fee / bbl</Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    Fresh Water Fee / bbl
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    KCI/Chemical Fee / bbl
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell textAlign="center">Other Fee</Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Field>
                      <input placeholder="" />
                    </Form.Field>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default FormExampleSubcomponentControl;
