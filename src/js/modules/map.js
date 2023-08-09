export let map

main()
export async function main() {
  await ymaps3.ready

  map = new ymaps3.YMap(document.getElementById('map'), {
    location: {
      center: [50.181650467999276, 53.21249544520122],

      zoom: 16,
    },
  })

  map.addChild(new ymaps3.YMapDefaultSchemeLayer())
}


