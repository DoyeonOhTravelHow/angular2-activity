import { Component } from '@angular/core';

import { TabContainer, TabContainerHeader, TabContainerBody } from '../../components/tab/tab-container.component';
import { TabContent } from '../../components/tab/tab-content.component';

import { PickCalendarComponent } from './pickCalendar/pick-calendar.component';
import { SearchActivityComponent } from './searchActivity/search-activity.component';
import { PickDestinationComponent } from './pickDestination/pick-destination.component';
import { CheckActivitiesComponent } from './checkActivities/check-activities.component';
import { ChoosePassengerComponent } from './choosePassenger/choose-passenger.component';
import { ShowBestDestinationComponent } from './showBestDestination/show-best-destination.component';

@Component({
  selector: 'ActivityHome',
  template: `
    <div>
      <TabContainer>
        <TabContainerHeader></TabContainerHeader>
        <TabContainerBody class="insurance-search-option">
          <TabContent class="search-option1">

            <div class="banner">
            </div>
            <PickDestination></PickDestination>
            <CheckActivities></CheckActivities>
            <PickCalendar></PickCalendar>
            <ChoosePassenger></ChoosePassenger>
            <SearchActivity></SearchActivity>
            <ShowBestDestination></ShowBestDestination>

          </TabContent>
        </TabContainerBody>
      </TabContainer>
    </div>
  `,
  directives: [ TabContainer, TabContainerHeader, TabContainerBody,
            PickDestinationComponent, CheckActivitiesComponent, PickCalendarComponent,
            ChoosePassengerComponent, SearchActivityComponent, ShowBestDestinationComponent ],
  styles: [`
    .banner{
      width: 400px;
      height: 178px;
      position: relative;
      border: 1px solid black;
      background: url('http://static.travelhow.com/upload/470364039339.JPG') 50% 50% no-repeat;
      background-size: cover;
    }
    .insurance-search-option{
      color: blue;
      .search-option1 {
        color: red;
      }
    }
  `],
  // styleUrls: [
  //   './app/+activity/+home/home.component.css'
  // ]
})
export class ActivityHomeComponent {

}
