(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict';

  vega = vega && Object.prototype.hasOwnProperty.call(vega, 'default') ? vega['default'] : vega;
  vegaLite = vegaLite && Object.prototype.hasOwnProperty.call(vegaLite, 'default') ? vegaLite['default'] : vegaLite;
  vl = vl && Object.prototype.hasOwnProperty.call(vl, 'default') ? vl['default'] : vl;

  // Appearance customization to improve readability.
  // See https://vega.github.io/vega-lite/docs/
  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark
      }
    }
  };

  const csvUrl = 'https://gist.githubusercontent.com/andre6639/88b4af6963fb5ed29d6b86eb55edae91/raw/0053db0a299ce245974e4af5e22b7a10f53e26f7/SFO_SummaryOfTheMonth_1955thr2020.csv';

  const getData = async () => {
    const data = await d3.csv(csvUrl);
    
    // Have a look at the attributes available in the console!
    console.log(data[0]);

    return data;
  };

  const viz = vl
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

  vl.register(vega, vegaLite, {
    view: { renderer: 'svg' },
    init: view => { view.tooltip(new vegaTooltip.Handler().call); }
  });

  console.log(getData);

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config);
    
    document.body.appendChild(await marks.render());
  };
  run();

}(vega, vegaLite, vl, vegaTooltip, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImdldERhdGEuanMiLCJ2aXouanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlYXJhbmNlIGN1c3RvbWl6YXRpb24gdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbi8vIFNlZSBodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL1xuY29uc3QgZGFyayA9ICcjM2UzYzM4JztcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGF4aXM6IHtcbiAgICBkb21haW46IGZhbHNlLFxuICAgIHRpY2tDb2xvcjogJ2xpZ2h0R3JheSdcbiAgfSxcbiAgc3R5bGU6IHtcbiAgICBcImd1aWRlLWxhYmVsXCI6IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGZpbGw6IGRhcmtcbiAgICB9LFxuICAgIFwiZ3VpZGUtdGl0bGVcIjoge1xuICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgZmlsbDogZGFya1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgeyBjc3YgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNzdlVybCA9ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FuZHJlNjYzOS84OGI0YWY2OTYzZmI1ZWQyOWQ2Yjg2ZWI1NWVkYWU5MS9yYXcvMDA1M2RiMGEyOTljZTI0NTk3NGU0YWY1ZTIyYjdhMTBmNTNlMjZmNy9TRk9fU3VtbWFyeU9mVGhlTW9udGhfMTk1NXRocjIwMjAuY3N2JztcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjc3YoY3N2VXJsKTtcbiAgXG4gIC8vIEhhdmUgYSBsb29rIGF0IHRoZSBhdHRyaWJ1dGVzIGF2YWlsYWJsZSBpbiB0aGUgY29uc29sZSFcbiAgY29uc29sZS5sb2coZGF0YVswXSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59OyIsImltcG9ydCB2bCBmcm9tICd2ZWdhLWxpdGUtYXBpJztcbmV4cG9ydCBjb25zdCB2aXogPSB2bFxuXHQubWFya0NpcmNsZSh7ICBcbiAgICBzaXplOiA5MDAsIFxuICAgIG9wYWNpdHk6IC4yMCxcbiAgfSlcbiAgLmVuY29kZShcbiAgICB2bC54KCkuZmllbGRUKCdEQVRFJyksXG4gICAgdmwueSgpLmZpZWxkUSgnRXh0cmVtZU1pbmltdW1UZW1wZXJhdHVyZUZvclRoZVBlcmlvZCcpLnNjYWxlKHsgemVybzogZmFsc2UgfSksXG4gICAgdmwudG9vbHRpcCgpLmZpZWxkTignRXh0cmVtZU1pbmltdW1UZW1wZXJhdHVyZUZvclRoZVBlcmlvZCcpXG4gICk7XG5cbi8vIC5zY2FsZSh7IHplcm86IGZhbHNlIH0pLCIsImltcG9ydCB2ZWdhIGZyb20gJ3ZlZ2EnO1xuaW1wb3J0IHZlZ2FMaXRlIGZyb20gJ3ZlZ2EtbGl0ZSc7XG5pbXBvcnQgdmwgZnJvbSAndmVnYS1saXRlLWFwaSc7XG5pbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSAndmVnYS10b29sdGlwJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHsgdml6IH0gZnJvbSAnLi92aXonO1xuXG52bC5yZWdpc3Rlcih2ZWdhLCB2ZWdhTGl0ZSwge1xuICB2aWV3OiB7IHJlbmRlcmVyOiAnc3ZnJyB9LFxuICBpbml0OiB2aWV3ID0+IHsgdmlldy50b29sdGlwKG5ldyBIYW5kbGVyKCkuY2FsbCk7IH1cbn0pO1xuXG5jb25zb2xlLmxvZyhnZXREYXRhKTtcblxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXJrcyA9IHZpelxuICAgIC5kYXRhKGF3YWl0IGdldERhdGEoKSlcbiAgICAud2lkdGgod2luZG93LmlubmVyV2lkdGgpXG4gICAgLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgLmF1dG9zaXplKHsgdHlwZTogJ2ZpdCcsIGNvbnRhaW5zOiAncGFkZGluZycgfSlcbiAgICAuY29uZmlnKGNvbmZpZyk7XG4gIFxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF3YWl0IG1hcmtzLnJlbmRlcigpKTtcbn07XG5ydW4oKTsiXSwibmFtZXMiOlsiY3N2IiwiSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQUFBO0VBQ0E7RUFDQSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUM7RUFDaEIsTUFBTSxNQUFNLEdBQUc7RUFDdEIsRUFBRSxJQUFJLEVBQUU7RUFDUixJQUFJLE1BQU0sRUFBRSxLQUFLO0VBQ2pCLElBQUksU0FBUyxFQUFFLFdBQVc7RUFDMUIsR0FBRztFQUNILEVBQUUsS0FBSyxFQUFFO0VBQ1QsSUFBSSxhQUFhLEVBQUU7RUFDbkIsTUFBTSxRQUFRLEVBQUUsRUFBRTtFQUNsQixNQUFNLElBQUksRUFBRSxJQUFJO0VBQ2hCLEtBQUs7RUFDTCxJQUFJLGFBQWEsRUFBRTtFQUNuQixNQUFNLFFBQVEsRUFBRSxFQUFFO0VBQ2xCLE1BQU0sSUFBSSxFQUFFLElBQUk7RUFDaEIsS0FBSztFQUNMLEdBQUc7RUFDSCxDQUFDOztFQ2hCRCxNQUFNLE1BQU0sR0FBRyxrS0FBa0ssQ0FBQztBQUNsTDtFQUNPLE1BQU0sT0FBTyxHQUFHLFlBQVk7RUFDbkMsRUFBRSxNQUFNLElBQUksR0FBRyxNQUFNQSxNQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakM7RUFDQTtFQUNBLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QjtFQUNBLEVBQUUsT0FBTyxJQUFJLENBQUM7RUFDZCxDQUFDOztFQ1ZNLE1BQU0sR0FBRyxHQUFHLEVBQUU7RUFDckIsRUFBRSxVQUFVLENBQUM7RUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0VBQ2IsSUFBSSxPQUFPLEVBQUUsR0FBRztFQUNoQixHQUFHLENBQUM7RUFDSixHQUFHLE1BQU07RUFDVCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3pCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztFQUNqRixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsdUNBQXVDLENBQUM7RUFDaEUsR0FBRyxDQUFDO0FBQ0o7RUFDQTs7RUNKQSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7RUFDNUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0VBQzNCLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSUMsbUJBQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7RUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDSDtFQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckI7RUFDQSxNQUFNLEdBQUcsR0FBRyxZQUFZO0VBQ3hCLEVBQUUsTUFBTSxLQUFLLEdBQUcsR0FBRztFQUNuQixLQUFLLElBQUksQ0FBQyxNQUFNLE9BQU8sRUFBRSxDQUFDO0VBQzFCLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDN0IsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUMvQixLQUFLLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0VBQ25ELEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BCO0VBQ0EsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0VBQ2xELENBQUMsQ0FBQztFQUNGLEdBQUcsRUFBRTs7OzsifQ==