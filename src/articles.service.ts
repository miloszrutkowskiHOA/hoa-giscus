import { Injectable } from '@angular/core';

export type Article = {
  id: string;
  title: string;
  content: string;
};

const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'My awesome article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat id elit vitae ornare. Aliquam eget ex non quam interdum accumsan et non tortor. Cras aliquam, sem quis tincidunt ornare, mauris metus condimentum nisi, ut condimentum leo nulla sit amet risus. Mauris interdum quis purus efficitur viverra. Quisque luctus, enim sit amet fermentum semper, tellus ante efficitur neque, non aliquet eros erat et velit. Nulla vel dictum turpis, gravida sagittis justo. Nam viverra suscipit dictum. Suspendisse elementum bibendum metus nec posuere. Nullam sodales dui et nulla ultricies, sed sodales lorem porttitor. Donec varius convallis eros.In tincidunt quam non quam ultrices, nec volutpat leo condimentum. Donec eget metus eu nibh mollis pretium ut vitae lectus. Nunc pellentesque vehicula tellus vitae posuere. Morbi et leo metus. Phasellus id eleifend odio. Fusce id ullamcorper lorem. Vestibulum in sapien fermentum, ultricies nibh vel, dictum urna. Donec tincidunt ut nulla id dignissim. Duis id quam quam. Vivamus non sagittis metus.',
  },
  {
    id: '2',
    title: 'Another awesome article',
    content:
      'Nulla facilisi. Vivamus porta porttitor blandit. Curabitur quis dapibus lacus. Proin aliquet, tellus sed laoreet molestie, quam nibh malesuada orci, at finibus leo urna vel odio. Aliquam pretium tortor a dictum finibus. Aliquam fringilla libero felis, vel venenatis urna convallis laoreet. Morbi volutpat placerat purus et suscipit.Pellentesque et malesuada orci, ut auctor magna. Pellentesque placerat dolor orci, lobortis vestibulum neque hendrerit nec. Ut facilisis volutpat sem scelerisque placerat. Maecenas pellentesque, lacus commodo bibendum feugiat, metus nibh euismod erat, quis consectetur elit enim eu urna. Morbi hendrerit mi malesuada, eleifend ligula sit amet, blandit metus. Sed consectetur arcu a elit consequat, sit amet varius turpis vulputate. Vivamus tincidunt velit justo, id maximus mauris tincidunt at. Vestibulum et nisi id sem semper egestas a eu risus. Donec sagittis est sed libero elementum, sit amet commodo orci tincidunt. Morbi rhoncus felis vitae ligula tristique venenatis. Mauris odio sapien, pulvinar sit amet fermentum fringilla, egestas interdum dolor. Sed venenatis posuere accumsan. Etiam turpis mi, iaculis quis eros in, consectetur tristique ex. Pellentesque vestibulum placerat egestas.',
  },
];

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private readonly articles = ARTICLES;

  getAll(): Article[] {
    return this.articles;
  }

  getById(id: string): Article | null {
    return this.articles.find((article) => article.id === id) ?? null;
  }
}
