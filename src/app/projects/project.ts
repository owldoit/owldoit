export class Project {
	constructor(
	    private id: number,
	    private ownerId: number,
	    public title: string,
	    public description: string,
	    public deadline: Date,
	    public participants?: number
	) {  }
}
