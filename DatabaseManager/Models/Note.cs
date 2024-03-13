namespace DatabaseManager.Models {
    public class Note {
        public int Id { get; set; }
        public string Title { get; set; } 
        public string? Text { get; set; }
        public string? Icon { get; set; }
        public string Color { get; set; } = "#000000";
        public Page Page { get; set; }
    }



}
