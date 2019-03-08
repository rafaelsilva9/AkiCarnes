import React from 'react'
import { View } from 'react-native'
import { BarChart, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

export default class Chart extends React.PureComponent {

    render() {

        const data1 = [100, 70, 90, 50, 60, 70, 70, 40, 50, 10, 20, 10]
            .map((value) => ({ value }))
        const data2 = [90, 80, 80, 60, 60, 70, 80, 40, 50, 10, 20, 10]
            .map((value) => ({ value }))

        const monthList = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'rgb(232,51,55)',
                },
            },
            {
                data: data2,
            },
        ]

        return (
            <View style={{ height: 200, padding: 20 }}>
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={barData}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(232,51,55, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                    horizontal={false}
                >
                </BarChart>
                <XAxis
                    style={{ marginTop: 10 }}
                    data={monthList}
                    scale={scale.scaleBand}
                    formatLabel={(value, index) => monthList[value]}
                    labelStyle={{ color: 'black' }}
                />
            </View>
        )
    }

}
