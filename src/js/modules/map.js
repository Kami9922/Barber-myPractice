ymaps.ready(init)
function init() {
  var map = new ymaps.Map('map', {
    center: [53.21249544520122, 50.181650467999276],
    zoom: 15,
  })

  var myPlacemark = new ymaps.Placemark(
    [53.21249544520122, 50.181650467999276],
    {
      balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Московское шоссе, 15Б</div>
				</div>
			`,
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../../img/map/location-pin.svg',
      icon_imagesize: [40, 40],
      iconImageOffset: [-10, -42],
    }
  )

  map.controls.remove('geolocationControl') // удаляем геолокацию
  map.controls.remove('searchControl') // удаляем поиск
  map.controls.remove('trafficControl') // удаляем контроль трафика
  map.controls.remove('typeSelector') // удаляем тип
  map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl') // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)

  map.geoObjects.add(myPlacemark)
}
