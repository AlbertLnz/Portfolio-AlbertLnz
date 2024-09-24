import BrokenClouds from '@/assets/weather/BrokenClouds.astro'
import ClearSkyDay from '@/assets/weather/ClearSky_day.astro'
import ClearSkyNight from '@/assets/weather/ClearSky_night.astro'
import FewCloudsDay from '@/assets/weather/FewClouds_day.astro'
import FewCloudsNight from '@/assets/weather/FewClouds_night.astro'
import Mist from '@/assets/weather/Mist.astro'
import Rain from '@/assets/weather/Rain.astro'
import ScatteredCloudsDay from '@/assets/weather/ScatteredClouds_day.astro'
import ScatteredCloudsNight from '@/assets/weather/ScatteredClouds_night.astro'
import ShowerRain from '@/assets/weather/ShowerRain.astro'
import Snow from '@/assets/weather/Snow.astro'
import Thunderstorm from '@/assets/weather/Thunderstorm.astro'
import Unknown from '@/assets/weather/Unknown.astro'

export const assignIconWeatherArr = [
  {
    name: 'broken clouds',
    component: BrokenClouds,
  },
  {
    name: 'clear sky_day',
    component: ClearSkyDay,
  },
  {
    name: 'clear sky_night',
    component: ClearSkyNight,
  },
  {
    name: 'few clouds_day',
    component: FewCloudsDay,
  },
  {
    name: 'few clouds_night',
    component: FewCloudsNight,
  },
  {
    name: 'mist',
    component: Mist,
  },
  {
    name: 'rain',
    component: Rain,
  },
  {
    name: 'scattered clouds_day',
    component: ScatteredCloudsDay,
  },
  {
    name: 'scattered clouds_night',
    component: ScatteredCloudsNight,
  },
  {
    name: 'shower rain',
    component: ShowerRain,
  },
  {
    name: 'snow',
    component: Snow,
  },
  {
    name: 'thunderstorm',
    component: Thunderstorm,
  },
  {
    name: 'unknown',
    component: Unknown,
  },
]
