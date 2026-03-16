import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSchool } from '@ng-icons/lucide';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { data } from '../../data/data';
import { NavMain } from "./nav/nav-main";
import { NavProjects } from "./nav/nav-projects";
import { NavSecondary } from "./nav/nav-secondary";


@Component({
	selector: 'app-sidebar',
	imports: [HlmSidebarImports, NgIcon, NavMain, NavProjects, NavSecondary],
	providers: [provideIcons({ lucideSchool })],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div hlmSidebarWrapper class="flex-col">
			<ng-content select="[header]" />
			<div class="flex flex-1">
				<hlm-sidebar sidebarContainerClass="top-(--header-height) h-[calc(100svh-var(--header-height))]">
					<hlm-sidebar-header>
						<ul hlmSidebarMenu>
							<li hlmSidebarMenuItem>
								<a hlmSidebarMenuButton size="lg" href="#">
									<div
										class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
									>
										<ng-icon name="lucideSchool" class="text-base" />
									</div>
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-medium">Anuários</span>
										<span class="truncate text-xs">IFAM - Tefé</span>
									</div>
								</a>
							</li>
						</ul>
					</hlm-sidebar-header>

					<hlm-sidebar-content>
						<spartan-nav-main [items]="data.navMain" />
						<spartan-nav-projects [projects]="data.projects" />
						<spartan-nav-secondary class="mt-auto" [items]="data.navSecondary" />
					</hlm-sidebar-content>
					<hlm-sidebar-footer>
						
					</hlm-sidebar-footer>
				</hlm-sidebar>
				<ng-content />
			</div>
		</div>
	`,
})
export class AppSidebar {
	public readonly data = data;
}