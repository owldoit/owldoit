export class Project {
	constructor(
	    private id: number,
	    private ownerId: string,
	    public title: string,
	    public description: string,
	    public deadline: Date,
	    public participants?: number
	) {  }
}
