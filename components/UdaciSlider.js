import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

const UdaciSlider = ({ max, unit, step, value, onChange }) => (
    <View style={styles.row}>
        <Slider
            style={{ flex: 1 }}
            step={step}
            value={value}
            maximumValue={max}
            minimumValue={0}
            onValueChange={onChange}
        />
        <View style={styles.metricCounter}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
            <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    metricCounter: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

UdaciSlider.propTypes = {}

UdaciSlider.defaultProps = {}

export default UdaciSlider