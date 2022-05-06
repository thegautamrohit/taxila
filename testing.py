import os


def get_filepaths(directory):

    file_paths = []

    for root, directories, files in os.walk(directory):
        for filename in files:

            filepath = os.path.join(root, filename)
            file_paths.append(filepath)

    return file_paths


full_file_paths = get_filepaths(
    "/Users/myaja/Desktop/taxila/src/Assets/images/kitchen/Maistri")
print(full_file_paths)
