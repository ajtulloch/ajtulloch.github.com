task :build do
  begin
    require "fileutils"
    FileUtils.rm_r "_site"
    Dir.chdir("PDFs") do
      Dir["*.pdf"].each do |file|
        begin
          FileUtils.mv file, file.delete(" ")
        rescue Exception => e
        end
        
      end
    end
    system("jekyll --server")
  end
  
end