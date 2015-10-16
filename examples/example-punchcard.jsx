import * as React from 'react';

import { Punchcard } from '@panorama/toolkit';

export default class PunchcardExample extends React.Component {

	constructor () {
		super();
	}

	render () {

		// TODO: friday: finish this example,
		// push and link to source in comment for sean,
		// npm version and publish and include in canals.

		let punchcardData = {
			"header": {
				"title": "Erie Canal",
				"subtitle": 1850,
				"caption": 1635089
			},
			"categories": [
				{
					"commodities": [
						{
							"name": "Wheat",
							"value": 3670754,
							"normalizedValue": 359733.892
						},
						{
							"name": "Flour",
							"value": 3256077,
							"normalizedValue": 319095.546
						},
						{
							"name": "Grain",
							"value": 7339865,
							"normalizedValue": 172486.8275
						}
					],
					"name": "Grains, Alcohol & Tobacco",
					"aggregateNormalizedValue": 851316.2655
				},
				{
					"commodities": [
						{
							"name": "Boards & scantling",
							"value": 425095442,
							"normalizedValue": 637643.163
						},
						{
							"name": "Shingles",
							"value": 58433000,
							"normalizedValue": 29216.5
						}
					],
					"name": "Building Materials",
					"aggregateNormalizedValue": 666859.663
				},
				{
					"commodities": [
						{
							"name": "Product of the Forest",
							"value": 1261991,
							"normalizedValue": 1261991
						},
						{
							"name": "Staves",
							"value": 202224000,
							"normalizedValue": 101112
						},
						{
							"name": "Timber",
							"value": 1666262,
							"normalizedValue": 25993.6872
						},
						{
							"name": "Wood",
							"value": 12411,
							"normalizedValue": 18616.5
						}
					],
					"name": "Lumber\/Timber\/Wood",
					"aggregateNormalizedValue": 1407713.1872
				},
				{
					"commodities": [
						{
							"name": "Agriculture",
							"value": 965619,
							"normalizedValue": 965619
						}
					],
					"name": "Agricultural Products (other than grains)",
					"aggregateNormalizedValue": 965619
				},
				{
					"commodities": [
						{
							"name": "Merchandise",
							"value": 269370,
							"normalizedValue": 269370
						},
						{
							"name": "Manufactures",
							"value": 200218,
							"normalizedValue": 200218
						}
					],
					"name": "Finished Products",
					"aggregateNormalizedValue": 469588
				},
				{
					"commodities": [
						{
							"name": "Miscellaneous\/Other Articles",
							"value": 379419,
							"normalizedValue": 379419
						}
					],
					"name": "Other Articles",
					"aggregateNormalizedValue": 379419
				}
			],
			"items": [
				{
					"name": "Boards & scantling",
					"value": 425095442,
					"normalizedValue": 637643.163
				},
				{
					"name": "Flour",
					"value": 3256077,
					"normalizedValue": 319095.546
				},
				{
					"name": "Grain",
					"value": 7339865,
					"normalizedValue": 172486.8275
				},
				{
					"name": "Product of the Forest",
					"value": 1261991,
					"normalizedValue": 1261991
				},
				{
					"name": "Shingles",
					"value": 58433000,
					"normalizedValue": 29216.5
				},
				{
					"name": "Timber",
					"value": 1666262,
					"normalizedValue": 25993.6872
				},
				{
					"name": "Miscellaneous\/Other Articles",
					"value": 379419,
					"normalizedValue": 379419
				},
				{
					"name": "Wood",
					"value": 12411,
					"normalizedValue": 18616.5
				},
				{
					"name": "Agriculture",
					"value": 965619,
					"normalizedValue": 965619
				},
				{
					"name": "Wheat",
					"value": 3670754,
					"normalizedValue": 359733.892
				},
				{
					"name": "Staves",
					"value": 202224000,
					"normalizedValue": 101112
				},
				{
					"name": "Manufactures",
					"value": 200218,
					"normalizedValue": 200218
				},
				{
					"name": "Merchandise",
					"value": 269370,
					"normalizedValue": 269370
				}
			]
		};

		return (
			<Punchcard {...punchcardData} />
		);

	}

}
