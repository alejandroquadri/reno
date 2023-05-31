import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  generateTags(tags?: any) {
    // default values
    // tags = {
    //   title: copy.title,
    //   description: copy.desc,
    //   image: copy.img,
    //   slug: '',
    //   ...tags,
    // };

    // Set a title and description
    this.titleService.setTitle(tags.title);
    this.meta.updateTag({ name: 'description', content: tags.description });

    // Twitter cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: tags.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });
    this.meta.updateTag({
      name: 'twitter:url',
      content: `https://www.quadri.com.ar${tags.slug}`,
    });

    // Facebook Open Graph
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({
      property: 'og:description',
      content: tags.description,
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://www.quadri.com.ar${tags.slug}`,
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'Quadri' });
    // this.meta.updateTag({ property: 'og:locale', content: locale });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
  }

  createCanonicalURL(slug: string) {
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
    link.setAttribute('href', `https://www.quadri.com.ar${slug}`);
    // console.log('agrego canonical', `https://www.quadri.com.ar${slug}` );
  }
}
