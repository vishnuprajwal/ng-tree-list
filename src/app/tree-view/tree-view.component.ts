import { Component, OnInit } from '@angular/core';
import { TreeUtility } from '../class/tree-utility';
import { FolderInfoService } from '../service/folder-info.service';
import { Product } from '../class/Product';
import { S3Service } from '../class/S3-Service';

@Component({
	selector: 'app-tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

	divElement: any[];
	currentItem: Product;
	products: Product[];

	private folderArray: string[];

	private treeUtility: TreeUtility = new TreeUtility();

	constructor(private api: FolderInfoService) {

		debugger;
		this.products = this.getProducts();
		this.divElement = this.getProducts();
		this.divElement[0];
		this.currentItem = this.divElement[0];

	}

	selectItem(e) {
		this.currentItem = e.itemData;
	}


	ngOnInit(): void {
	}

	buildTreeFormat(orderNumber) {

		this.api.getFileInfosFromS3(orderNumber).subscribe((s3Response) => {

			this.folderArray = s3Response;

		});
	}

	getProducts(): Product[] {

		this.folderArray = S3Service.hardCodedValues;
		
		return JSON.parse(this.treeUtility.generateJSONTree(this.folderArray));
	}

}
