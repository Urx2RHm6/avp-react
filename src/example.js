import React, { Component } from "react";
import { Form, Grid, Table } from "semantic-ui-react";

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Grid divided>
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
            <Grid.Column width={3}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell> </Table.HeaderCell>
                    <Table.HeaderCell>Gauges</Table.HeaderCell>
                    <Table.HeaderCell>Tank #</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
            </Grid.Column>
            <Grid.Column width={3}>
              <Grid.Row>
                <Form.Field>
                  <label />
                  <input placeholder="Date" />
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <Form.Field>
                  <label />
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
        </Grid>
      </Form>
    );
  }
}

export default FormExampleSubcomponentControl;
