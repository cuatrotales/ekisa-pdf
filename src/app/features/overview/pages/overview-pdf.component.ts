import { Component, OnInit, ViewChild } from '@angular/core';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { DxDataGridComponent } from 'devextreme-angular';
import jsPDF from 'jspdf';
import { Country, Overview } from 'src/app/@core/models/overview.model';

@Component({
  templateUrl: './overview-pdf.component.html',
  styleUrls: ['./overview-pdf.component.css'],
})
export class OverviewPdfComponent implements OnInit {
  @ViewChild('priceDataGrid', { static: false })
  priceDataGrid!: DxDataGridComponent;

  @ViewChild('ratingDataGrid', { static: false })
  ratingDataGrid!: DxDataGridComponent;

  customers: Overview[] = [
    {
      ID: 1,
      City: 'Medellín',
      Phone: '6871716110',
    },
    {
      ID: 2,
      City: 'Medellín',
      Phone: '7982716110',
    },
  ];

  country: Country[] = [
    {
      ID: 0,
      Country: '',
      Area: 0,
      Population_Urban: 0,
      Population_Rural: 0,
      Population_Total: 0,
      GDP_Agriculture: 0,
      GDP_Industry: 0,
      GDP_Services: 0,
      GDP_Total: 0,
    },
  ];

  ratingDataSource: {} = {};
  priceDataSource: {} = {};

  constructor() {
    this.priceDataSource = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
    };

    this.ratingDataSource = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
    };
  }

  ngOnInit(): void {
    // const generatePDF = (characterData, preview) => {
    //   const doc = new jsPDF();
    //   doc.setFontSize(40);
    //   doc.setFont('helvetica', 'bold');
    //   doc.text(characterData.name, 60, 30);
    //   doc.setFont('helvetica', 'normal');
    //   doc.text(characterData.surname, 60, 42);
    //   doc.addImage(characterData.type.image, 'PNG', 5, 0, 50, 50);
    //   doc.setFontSize(20);
    //   const docWidth = doc.internal.pageSize.getWidth();
    //   const docHeight = doc.internal.pageSize.getHeight();
    //   doc.line(0, 60, docWidth, 60);
    //   doc.setFont('helvetica', 'italic');
    //   const splitDescription = doc.splitTextToSize(
    //     characterData.description,
    //     docWidth - 20
    //   );
    //   doc.text(splitDescription, 10, 80);
    //   doc.setFontSize(20);
    //   doc.setFont('helvetica', 'bold');
    //   doc.text(characterData.type.name, docWidth - 20, 45, { align: 'right' });
    //   doc.line(0, docHeight - 60, docWidth, docHeight - 60);
    //   doc.text(`Fuerza: `, 10, docHeight - 40);
    //   doc.text(`Magia: `, 10, docHeight - 30);
    //   doc.text(`Velocidad: `, 10, docHeight - 20);
    //   doc.setFont('helvetica', 'normal');
    //   doc.text(`${characterData.strength}`, 50, docHeight - 40);
    //   doc.text(`${characterData.magic}`, 50, docHeight - 30);
    //   doc.text(`${characterData.velocity}`, 50, docHeight - 20);
    //   if (preview) {
    //     frame.src = doc.output('bloburl');
    //     return;
    //   }
    //   doc.save(`${characterData.name}-${characterData.surname}`);
    // };
  }

  onExportingOne(e: any) {
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save('Quiron2.pdf');
    });
  }

  onExportingTwo(e: any) {
    const doc = new jsPDF();
    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      columnWidths: [40, 40, 30, 30, 40],
      customDrawCell(options: any) {
        const { gridCell, pdfCell } = options;

        if (
          gridCell.rowType === 'data' &&
          gridCell.column.dataField === 'Website'
        ) {
          options.cancel = true;
          doc.setFontSize(11);
          doc.setTextColor('#0000FF');

          const textHeight = doc.getTextDimensions(pdfCell.text).h;
          doc.textWithLink(
            'website',
            options.rect.x + pdfCell.padding.left,
            options.rect.y + options.rect.h / 2 + textHeight / 2,
            { url: pdfCell.text }
          );
        }
      },
    }).then(() => {
      doc.save('Companies.pdf');
    });
  }
  onExporting(e: any) {
    const doc = new jsPDF();
    const lastPoint = { x: 0, y: 0 };

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      topLeft: { x: 1, y: 15 },
      columnWidths: [30, 20],
    }).then(() => {
      const header = 'Country Area, Population, and GDP Structure';
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.setFontSize(15);
      const headerWidth = doc.getTextDimensions(header).w;
      doc.text(header, (pageWidth - headerWidth) / 2, 20);

      const footer = 'www.wikipedia.org';
      doc.setFontSize(15);
      doc.setTextColor('#000');
      const footerWidth = doc.getTextDimensions(footer).w;
      doc.text(footer, lastPoint.x - footerWidth, lastPoint.y + 5);

      doc.save('Companies.pdf');
    });
  }

  setAlternatingRowsBackground(dataGrid: any, gridCell: any, pdfCell: any) {
    if (gridCell.rowType === 'data') {
      const rowIndex = dataGrid.getRowIndexByKey(gridCell.data.Product_ID);
      if (rowIndex % 2 === 0) {
        pdfCell.backgroundColor = '#D3D3D3';
      }
    }
  }

  exportGrids() {
    const context = this;
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: context.priceDataGrid.instance,
      topLeft: { x: 7, y: 5 },
      columnWidths: [20, 50, 50, 50],
      customizeCell: ({ gridCell, pdfCell }) => {
        context.setAlternatingRowsBackground(
          context.priceDataGrid.instance,
          gridCell,
          pdfCell
        );
      },
    }).then(() => {
      doc.addPage();
      exportDataGrid({
        jsPDFDocument: doc,
        component: context.ratingDataGrid.instance,
        topLeft: { x: 7, y: 5 },
        columnWidths: [20, 50, 50, 50],
        customizeCell: ({ gridCell, pdfCell }) => {
          context.setAlternatingRowsBackground(
            context.ratingDataGrid.instance,
            gridCell,
            pdfCell
          );
        },
      }).then(() => {
        doc.save('MultipleGrids.pdf');
      });
    });
  }

  phoneNumberFormat(value: any) {
    const USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);

    return `(${USNumber[1]}) ${USNumber[2]}-${USNumber[3]}`;
  }
}
