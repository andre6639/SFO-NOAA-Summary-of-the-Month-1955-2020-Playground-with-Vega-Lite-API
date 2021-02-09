import vl from 'vega-lite-api';
export const viz = vl
	.markCircle({  
    size: 900, 
    opacity: .20,
  })
  .encode(
    vl.x().fieldT('DATE'),
    vl.y().fieldQ('ExtremeMinimumTemperatureForThePeriod').scale({ zero: false }),
    vl.tooltip().fieldN('ExtremeMinimumTemperatureForThePeriod')
  );

// .scale({ zero: false }),