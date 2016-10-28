import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerPrice'
})
export class PlayerPricePipe implements PipeTransform {

  transform(players: any, args?: any): any {

    players.sort( (priceCur, pricePrev) => {
      let cur = priceCur.marketValue? priceCur.marketValue.replace(/,/gi, '') : 0;
      let prev = pricePrev.marketValue? pricePrev.marketValue.replace(/,/gi, '') : 0;
      return parseInt(cur) > parseInt(prev) ? -1 : 1;
    });

    return players;
  }

}
