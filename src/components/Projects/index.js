import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const Projects = ({ projects }) => {
    return (
        <View>
            {
                projects.map((project) => <Text key={project}>{project}</Text>)
            }
        </View>

    )
}

const mapStateToProps = (state)=>{
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects)