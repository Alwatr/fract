import {AlwatrDynamicDirective, directive, html, Part, type PartInfo} from '@alwatr/fract';
import '@ionic/core/components/ion-badge.js';
import '@ionic/core/components/ion-button.js';
import '@ionic/core/components/ion-card-content.js';
import '@ionic/core/components/ion-card-header.js';
import '@ionic/core/components/ion-card-subtitle.js';
import '@ionic/core/components/ion-card-title.js';
import '@ionic/core/components/ion-card.js';
import '@ionic/core/components/ion-progress-bar.js';
import '@ionic/core/components/ion-searchbar.js';
import '@ionic/core/dist/index.js';
import '@ionic/core/dist/ionic/ionic.esm.js';
import '@ionic/core/dist/ionic/ionic.js';

export class AlwatrPageTestDirective extends AlwatrDynamicDirective {
  constructor(partInfo: PartInfo) {
    super(partInfo, '<alwatr-page-test>');
  }

  protected progress() {
    this._logger.logMethod?.('progress');
    let progress = 0;
    const progressBar = document.querySelector('ion-progress-bar');

    if (!progressBar) return;
    setInterval(() => {
      progressBar.value = progress += 0.01;
      if (progress > 1) {
        setTimeout(() => {
          progressBar.value = progress = 0;
        }, 1000);
      }
    }, 50);
  }

  override update(_part: Part, props: unknown[]): unknown {
    this.progress();
    return super.update(_part, props);
  }

  render(name: string): unknown {
    this._logger.logMethodArgs?.('render', name);
    return html`
      <ion-searchbar></ion-searchbar>

      <ion-progress-bar></ion-progress-bar>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>

        <ion-button fill="clear">Action 1</ion-button>
        <ion-button fill="clear">Action 2</ion-button>
      </ion-card>

      <ion-chip>Default</ion-chip>
      <ion-chip disabled="true">Disabled</ion-chip>
      <ion-chip outline="true">Outline</ion-chip>
    `;
  }
}

export const alwatrPageTest = directive(AlwatrPageTestDirective);
