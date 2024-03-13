namespace DatabaseManager.Models {
    public class PostIt {
        public int Id { get; set; }
        public int Xcord { get; set; }
        public int Ycord { get; set; }
        public string Color { get; set; } = "#000000";
        public string? Text { get; set; }
        public Image Image { get; set; }
    }



}
