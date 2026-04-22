import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HlmAspectRatioImports } from '@spartan-ng/helm/aspect-ratio';
import { HlmTypographyImports } from '@spartan-ng/helm/typography';

@Component({
  selector: 'app-class-presentation',
  imports: [NgOptimizedImage, HlmAspectRatioImports, HlmTypographyImports],
  templateUrl: './class-presentation.html',
  styles: ``,
})
export class ClassPresentation {}
