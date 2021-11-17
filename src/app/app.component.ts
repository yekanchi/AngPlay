import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import { AppService } from '../Services/app.service';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
  <bpas-code-editor language="sql" code="  select 'AverageCost' AS Cost_Sorted_By_Production_Days,[0], [1], [2], [3], [4] FROM(SELECT DaysToManufacture, StandardCost
  FROM Production.Product
) AS SourceTable
PIVOT
(
  AVG(StandardCost)
  FOR DaysToManufacture IN ([0], [1], [2], [3], [4])
) AS PivotTable;"></bpas-code-editor>
<bpas-code-editor language="json" code="console.log('hello world')"></bpas-code-editor>
  `,
})
export class AppComponent {
  constructor(private appService: AppService,
    private vcr: ViewContainerRef) {
    this.appService.setAppComponentRef(vcr);
  }
}
