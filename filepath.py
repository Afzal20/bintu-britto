import os

def list_files(directory):
    try:
        # Get a list of all files in the directory
        files = os.listdir(directory)
        
        # Filter out only files, ignoring directories
        files = [f for f in files if os.path.isfile(os.path.join(directory, f))]
        
        return files
    except FileNotFoundError:
        print(f"The directory {directory} does not exist.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

if __name__ == "__main__":
    directory = "./src/assets/img/"
    files = list_files(directory)
    print("Files in directory:", files)
