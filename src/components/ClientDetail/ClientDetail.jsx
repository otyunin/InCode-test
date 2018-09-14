import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Header, Image, List } from 'semantic-ui-react'

const ClientDetail = ({ clientDetail }) => {
  const style = {
    avatar: {
      width: 128,
      height: 128,
      margin: '0 15px 15px 0',
    },
  }

  return (
    <div>
      {clientDetail
        ? <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Image src={clientDetail.general.avatar} rounded style={style.avatar} />
          <Card style={{ margin: 0, boxShadow: 'none', width: 'auto' }}>
            <Card.Content style={{ padding: 0 }}>
              <Card.Header>{`${clientDetail.general.firstName} ${clientDetail.general.lastName}`}</Card.Header>
              <Card.Meta>{`${clientDetail.job.title} - ${clientDetail.job.company}`}</Card.Meta>
              <Card.Description>
                <List>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>
                      {clientDetail.contact.email}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content>
                      {clientDetail.contact.phone}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="map marker alternate" />
                    <List.Content>
                      <List.List style={{ paddingTop: 0 }}>
                        <List.Item>
                          {`${clientDetail.address.country}, ${clientDetail.address.city}`}
                        </List.Item>
                        <List.Item>
                          {`${clientDetail.address.street}, Zip: ${clientDetail.address.zipCode}`}
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                </List>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        : <Header disabled as="h4">Select a client from the list to get more detail</Header>
      }
    </div>
  )
}

ClientDetail.propTypes = {
  clientDetail: PropTypes.object,
}

ClientDetail.defaultProps = {
  clientDetail: null,
}

const mapStateToProps = store => ({
  clientDetail: store.clientDetail,
})

export default connect(mapStateToProps)(ClientDetail)
