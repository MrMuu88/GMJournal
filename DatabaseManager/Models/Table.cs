namespace DatabaseManager.Models {
    public class Table {
        public int Id { get; set; }
        public string Color { get; set; }
        public string? Icon {get;set;}
        public int Columns { get; set; } = 2;
        public int Rows { get; set; } = 2;
        public string? ColumnSizes { get; set; }  //csv of sizes
        public string? RowSizes { get; set; } //csv of sizes
        public string? ColumnAlign { get; set; } // csv of aligns
        public string? RowAlign { get; set; } //csv of aligns
        public string? Data { get; set; } //stored as csv
        public Page Page { get; set; } //nav Property
    }



}
