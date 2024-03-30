import { ButtonComponent } from './button.component';


export default {
  title: 'Button',
  tags: ['autodocs'],
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem; max-width: 400px; width: 100%; margin: 0 auto">
    <app-button>peterson</app-button>
  </div>
`,
};

export const Default = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem; max-width: 400px; width: 100%; margin: 0 auto">
    <app-button>peterson</app-button>
  </div>
`,
})

export const Secundary = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem; max-width: 400px; width: 100%; margin: 0 auto">
  <app-button color="secundary" [disable]="false">peterson</app-button>
  </div>
`,
})

export const Small = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem; max-width: 400px; width: 100%; margin: 0 auto">
    <app-button color="primary" size="small" [disable]="false">peterson</app-button>
  </div>
`,
})


export const Disable = () => ({
  component: ButtonComponent,
  template: `
  <div style="padding: 3rem; max-width: 400px; width: 100%; margin: 0 auto">
    <app-button color="primary" [disabled]="true">peterson</app-button>
  </div>
`,
})
