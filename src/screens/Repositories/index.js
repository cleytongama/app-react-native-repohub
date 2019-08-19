import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { Container } from './styles'
import { connect } from 'react-redux'
import * as RepositoriesActions from './../../store/actions/repositories'
import { bindActionCreators } from 'redux'

class Repositories extends Component {
    componentDidMount() {
        const { repositoriesRequest } = this.props

        repositoriesRequest()
    }

    render() {
        const { repositories } = this.props;
        return (

            <Container>
                {
                    repositories.loading
                        ?
                        <ActivityIndicator size="small" color="#999" />
                        :
                        repositories.data.map((repositorie) => <Text key={repositorie.id}>{repositorie.name}</Text>)
                }
            </Container>)
    }
}

const mapStateToProps = (state) => {

    return {
        repositories: state.repositories
    }
}

const mapDisptchToProps = (dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDisptchToProps)(Repositories)
