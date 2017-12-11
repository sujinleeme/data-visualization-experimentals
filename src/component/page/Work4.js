import React from 'react'
import StravaCalendarHeatMap from '../charts/StravaCalendarHeatMap/StravaCalendarHeatMap'
import BodyHeader from '../assests/BodyHeader'
import BodyFooter from '../assests/BodyFooter'
import ChartInfo from '../assests/ChartInfo'
import Posts from '../../Posts'
import Grid from 'material-ui/Grid'

export default () => {
	const post = Posts[3]
	return (
		<div>
			<BodyHeader
				title={post.title}
			/>
			<ChartInfo
				type={post.chartType}
				source={post.source}
				sourceURL={post.sourceURL}
				githubURL={post.githubURL}
			/>
			<Grid container spacing={24}>
				<Grid item md={12}>
					<StravaCalendarHeatMap/>
				</Grid>
			</Grid>
			<BodyFooter theme="light"/>
		</div>
	)
}

